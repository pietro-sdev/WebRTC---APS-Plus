import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Container from "@/components/layout/container";
import NavBar from "@/components/layout/navbar";
import SocketProvider from "@/provider/SocketProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidChat",
  description: "Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, 'relative')}>
          <SocketProvider>
            <main className='flex flex-col min-h-screen bg-secondary'>
              <NavBar />
              <section className='flex-grow'>
                <Container>
                  {children}
                </Container>
              </section>
            </main>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
