// 'use client';

// import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { theme } from '@/lib/theme';
// import { useState } from 'react';

// // Import Mantine CSS
// import '@mantine/core/styles.css';

// export default function RootLayout({ 
//   children 
// }: { 
//   children: React.ReactNode 
// }) {
//   const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

//   const toggleColorScheme = () => {
//     setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <html lang="en">
//       <head>
//         <ColorSchemeScript />
//       </head>
//       <body>
//         <MantineProvider 
//           theme={theme} 
//           forceColorScheme={colorScheme}
//         >
//           {children}
//         </MantineProvider>
//       </body>
//     </html>
//   );
// }

// import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { theme } from '@/lib/theme';
// import { cookies } from 'next/headers';
// // Import Mantine CSS
// import '@mantine/core/styles.css';

// export default async function RootLayout({ 
//   children 
// }: { 
//   children: React.ReactNode 
// }) {
//   // Server-side color scheme retrieval
//   const cookieStore = cookies();
//   const savedColorScheme =  cookieStore.get('mantine-color-scheme')?.value as 'light' | 'dark' | undefined;
//   const defaultColorScheme = savedColorScheme || 'light';

//   return (
//     <html lang="en">
//       <head>
//         <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
//       </head>
//       <body>
//         <MantineProvider 
//           theme={theme} 
//           defaultColorScheme={defaultColorScheme}
//         >
//           {children}
//         </MantineProvider>
//       </body>
//     </html>
//   );
// }
'use client';

import { MantineProvider } from '@mantine/core';
import AdminLayout from '@/components/Layout/AdminLayout';
import { usePathname } from 'next/navigation';


import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const isAuthRoute = pathname === '/auth/login'; // Check if it's the login page



 

  return (
    <html lang="en">
      <head>
      
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          {isAuthRoute ? (
            children /* Render children directly for /auth/login */
          ) : (
            <AdminLayout>{children}</AdminLayout> /* Wrap other pages in AdminLayout */
          )}
        </MantineProvider>
      </body>
    </html>
  );
}