'use client';

import { Button } from '@/components/ui/button';
import { Brain, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userEmail, setUserEmail] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on mount and when it changes
    const checkAuth = () => {
      const isAuth = localStorage.getItem('isAuthenticated');
      const email = localStorage.getItem('userEmail');
      
      if (!isAuth) {
        router.replace('/login');
      } else if (email) {
        setUserEmail(email);
      }
    };

    checkAuth();

    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.replace('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold">TaskAI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 mr-4">
                <User className="h-4 w-4" />
                <span className="text-sm">{userEmail}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}