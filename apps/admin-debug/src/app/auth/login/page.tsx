"use client";
import { useState } from 'react';
import AuthenticationImage from "@/components/Auth/AuthenticationImage";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Incorrect username or password');
        } else if (response.status === 400) {
          const errorData: { error: string } = await response.json(); //Type the response
          throw new Error(errorData.error || 'Bad Request');
        } else {
          throw new Error(`Login failed with status ${response.status}`);
        }
      }

      const data: { token: string } = await response.json(); // Type the response
      console.log('Login successful:', data);

      const secureAttribute = process.env.NODE_ENV === 'production' ? '; Secure' : '';
      document.cookie = `authToken=${data.token}; path=/; HttpOnly; SameSite=Strict${secureAttribute}`;
      console.log("Cookie set:", document.cookie);
      router.push('/');

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error); //Safe error handling
      setError(errorMessage);
      console.error("Login error:", error);
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationImage onLogin={handleLogin} isLoading={isLoading} error={error} />
  );
}