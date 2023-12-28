// ** React Import
import React from 'react';
import type { Metadata } from 'next';
// Import GlobalLayout
import GlobalLayout from '@/layout/';
import { Inter } from 'next/font/google';
//* ** Emotion Import
import type { EmotionCache } from '@emotion/cache';
// ** Metadata Import
import { metadata as _metadata } from '@/configs/metadata.config';

// ** Global CSS
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// ** Metadata
export const metadata: Metadata = {
  title: _metadata.title,
  description: _metadata.description,
};

interface AppLayoutProps {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}

export default function AppLayout({ children, emotionCache }: AppLayoutProps): React.ReactElement {
  return (
    // Wrap with GlobalLayout and pass default emotionCache
    <GlobalLayout emotionCache={emotionCache}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </GlobalLayout>
  );
}
