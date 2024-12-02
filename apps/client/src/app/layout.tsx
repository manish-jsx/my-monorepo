"use client";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from "../../components/HeaderMenu";
import { FooterLinks } from "../../components/FooterLinks";




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
        {/* Wrap the entire layout inside MantineProvider */}
        <MantineProvider>
          {/* Ensure that the header and footer are inside MantineProvider */}
        
          <HeaderMenu />
         
         
          <main>{children}</main>
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}