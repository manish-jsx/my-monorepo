
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { FooterLinks } from '@/components/FooterLinks';
import { HeaderMenu } from '@/components/HeaderMenu';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
        <main>
        <HeaderMenu/>
 {children}
<FooterLinks/>
    </main>
        </MantineProvider>
      </body>
    </html>
  );
}