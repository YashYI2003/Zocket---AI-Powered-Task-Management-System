import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          AI-Powered-Task-Management-System
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mb-6">
          Enhance your productivity with AI-driven task management. Experience smart recommendations, instant updates, and effortless collaboration—all in one platform.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full md:w-auto">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Brain className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-muted-foreground">
              Receive smart task recommendations and automated priority scheduling tailored to your workflow.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CheckCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-muted-foreground">
            Keep your team connected with real-time updates and seamless collaboration tools.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Effortlessly distribute tasks, communicate updates, and monitor your team's progress in real time.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}