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

// /app/layout.tsx (Server Component)
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import AdminLayout from '@/components/Layout/AdminLayout';

import { theme } from '@/lib/theme';
import { cookies } from 'next/headers';

import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Server-side color scheme retrieval (Server Component)
  const cookieStore = await cookies();
  const savedColorScheme = cookieStore.get('mantine-color-scheme')?.value as 'light' | 'dark' | undefined;
  
  // This value is passed down to the Client Component
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme={savedColorScheme || 'light'} />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={savedColorScheme || 'light'}>
          {/* Pass the color scheme to the client-side */}
          <AdminLayout>
      {children} {/* Pass the content inside the AdminLayout */}
    </AdminLayout>
        </MantineProvider>
      </body>
    </html>
  );
}