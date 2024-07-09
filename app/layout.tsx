import theme from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import ClientCacheProvider from './ClientCacheProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FileFlex',
  description: 'Advanced File Management and Sketching',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClientCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ClientCacheProvider>
      </body>
    </html>
  );
}
