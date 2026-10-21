import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jiibe — Employee Lifestyle Benefits Platform',
  description: 'Give your team the perks they actually want. Netflix, Hulu, Uber, DoorDash, UrbanSitter, Rover, and 500+ more lifestyle benefits — all in one platform HR teams love.',
  keywords: 'employee benefits, lifestyle benefits, perks platform, HR benefits, Netflix, Hulu, Uber, DoorDash, employee perks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
