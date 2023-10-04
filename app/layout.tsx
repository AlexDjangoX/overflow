import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Space_Grotesk as FontSpaceGrotesk } from 'next/font/google';
import type { Metadata } from 'next';

import './global.css';
import { ThemeProvider } from '@/context/ThemeProvider';

export const metadata: Metadata = {
  title: 'Overflow',
  description: 'Overflow',
  icon: '/assets/images/site-logo.svg',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const SpaceGrotesk = FontSpaceGrotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500',
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
