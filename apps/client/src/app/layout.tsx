'use client'
import '@mantine/core/styles.css';
import React from 'react';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from "../components/HeaderMenu";
import { FooterLinks } from "../components/FooterLinks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('RootLayout rendered. Props:', children);

  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <ColorSchemeScript />
          <HeaderMenu />
          <main>{children}</main>
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}