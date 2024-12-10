
'use client';
import { MantineProvider, Card, Group, Text, Button } from '@mantine/core';
import AdminLayout from '@/components/Layout/AdminLayout';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   const cookie = document.cookie.split('; ').find(c => c.startsWith('authToken='));
  //   setIsLoggedIn(!!cookie);
  // }, []);


  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="light">
          {pathname.startsWith('/auth') ? (
            children
          ) : isLoggedIn ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <Card shadow="sm" withBorder radius="md" mt="xl" style={{ maxWidth: '300px', margin: '0 auto' }}>
              <Group justify="center">
                <Text c="dimmed">You are not logged in.</Text>
                <Button variant="default" size="sm" component="a" href="/auth/login">Login</Button>
              </Group>
            </Card>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}





