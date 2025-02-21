'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, ListTodo, Clock, CheckCircle, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const taskSuggestions = [
  'Break down the authentication system implementation into smaller tasks',
  'Schedule a team review for the new feature implementation',
  'Create documentation for the API endpoints',
  'Set up automated testing pipeline for the backend',
  'Design user interface mockups for the mobile app',
  'Implement data validation for user input forms',
  'Create backup and recovery procedures for the database',
  'Optimize database queries for better performance',
  'Review and update security protocols',
  'Plan the next sprint activities and goals'
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    {
      title: 'Update project documentation',
      status: 'In Progress',
      dueDate: 'Today',
    },
    {
      title: 'Review pull requests',
      status: 'Pending',
      dueDate: 'Tomorrow',
    },
    {
      title: 'Setup CI/CD pipeline',
      status: 'Completed',
      dueDate: 'Yesterday',
    },
  ]);

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [usedSuggestions, setUsedSuggestions] = useState<Set<string>>(new Set());

  const [newTask, setNewTask] = useState({
    title: '',
    status: 'Pending',
    dueDate: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    updateSuggestions();
  }, []);

  const updateSuggestions = () => {
    const availableSuggestions = taskSuggestions.filter(
      suggestion => !usedSuggestions.has(suggestion)
    );
    const randomSuggestions = availableSuggestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setSuggestions(randomSuggestions);
  };

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.dueDate) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask({ title: '', status: 'Pending', dueDate: '' });
    setIsDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Task created successfully",
    });
  };

  const handleAddSuggestion = (suggestion: string) => {
    const newTaskFromSuggestion = {
      title: suggestion,
      status: 'Pending',
      dueDate: 'Tomorrow',
    };
    
    setTasks([...tasks, newTaskFromSuggestion]);
    setUsedSuggestions(new Set([...usedSuggestions, suggestion]));
    updateSuggestions();
    
    toast({
      title: "Success",
      description: "Suggestion added to tasks",
    });
  };

  const handleStatusChange = (taskIndex: number, newStatus: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      status: newStatus,
    };
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
    toast({
      title: "Success",
      description: "Task deleted successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Task
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>
                  Add a new task to your dashboard
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title</Label>
                  <Input
                    id="title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    placeholder="Enter task title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newTask.status}
                    onValueChange={(value) =>
                      setNewTask({ ...newTask, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask({ ...newTask, dueDate: e.target.value })
                    }
                    placeholder="e.g., Today, Tomorrow, Next Week"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateTask}>Create Task</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
              <ListTodo className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tasks.length}</div>
              <p className="text-xs text-muted-foreground text-left" >
                {tasks.filter((t) => t.status === 'Completed').length }/{tasks.length } Completed 
              </p>
            </CardContent>
          </Card>

          

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tasks.filter((t) => t.status === 'Completed').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Finished tasks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tasks.filter((t) => t.status === 'In Progress').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Active tasks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tasks.length-tasks.filter((t) => t.status === 'In Progress').length-tasks.filter((t) => t.status === 'Completed').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Active tasks
              </p>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                <path d="M12 12 2.1 12.5" />
                <path d="m2 12 10-4" />
                <path d="m2 12 10 4" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{suggestions.length}</div>
              <p className="text-xs text-muted-foreground">
                Available suggestions
              </p>
            </CardContent>
          </Card> */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <Card>
            <CardHeader>
              <CardTitle>AI Task Suggestions</CardTitle>
              <CardDescription>
                Personalized recommendations based on your workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 border rounded-lg"
                  >
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                        <path d="M12 12 2.1 12.5" />
                        <path d="m2 12 10-4" />
                        <path d="m2 12 10 4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">{suggestion}</p>
                      <Button
                        variant="link"
                        className="text-xs px-0"
                        onClick={() => handleAddSuggestion(suggestion)}
                      >
                        Add to tasks
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>Your latest tasks and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-grow">
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Due {task.dueDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select
                        value={task.status}
                        onValueChange={(value) => handleStatusChange(i, value)}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteTask(i)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}