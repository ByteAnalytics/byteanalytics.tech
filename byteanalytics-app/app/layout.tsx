import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { TopNav } from '@/components/sections/nav';
import { Footer } from '@/components/sections/footer';
import { GotoTop } from '@/components/global/go-to-top';
import { Toaster } from '@/components/ui/sonner';

const inter = DM_Sans({ subsets: ['latin'], weight:['400','700'] });
export const DmSans = DM_Sans({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Byte Analytics',
  icons: '/Shape.png',
  description:
    'Byte Analytics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-auto min-h-[100vh] flex flex-col ${inter.className}`}>
        <TopNav />
        <main className="mb-0 flex-grow lg:mt-[144px] mt-[73px]">{children}<GotoTop/></main>
        <Footer />
      <Toaster richColors />
      </body>
    </html>
  );
}
