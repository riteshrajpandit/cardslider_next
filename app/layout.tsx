import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavigationBar from '@/components/navigation-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event Discovery App',
  description: 'Discover and join exciting events near you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <main>{children}</main>
        <NavigationBar />
      </body>
    </html>
  );
}