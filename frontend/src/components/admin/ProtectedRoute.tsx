'use client';

import { useRouter } from 'next/navigation';

import {
  useEffect,
  useState,
} from 'react';

import { checkAuth } from '@/lib/auth';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [authenticated,
    setAuthenticated] =
    useState(false);

  useEffect(() => {
    const verifyAuth =
      async () => {
        const isAuth =
          await checkAuth();

        if (!isAuth) {
          router.push('/login');
        } else {
          setAuthenticated(true);
        }

        setLoading(false);
      };

    verifyAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}