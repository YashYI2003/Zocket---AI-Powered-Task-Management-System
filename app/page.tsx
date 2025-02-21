import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, CheckCircle, Layout, Users } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            TaskAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your workflow with AI-powered task management. Get intelligent suggestions,
            real-time updates, and seamless collaboration all in one place.
          </p>
          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Brain className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-muted-foreground">
              Get intelligent task suggestions and automated priority assignments based on your workflow.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CheckCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-muted-foreground">
              Stay in sync with your team through instant updates and live collaboration features.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Seamlessly assign tasks, share updates, and track progress across your entire team.
            </p>
          </Card>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your workflow?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of teams already using TaskAI to supercharge their productivity.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}