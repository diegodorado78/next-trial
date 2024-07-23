import "../ui/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { montserrat } from "@/ui/fonts";
import Navbar from "./components/navbar";
import { Avatar } from "@nextui-org/react";

export const metadata: Metadata = {
  title: 'Eagles Virtual education',
  description: 'Education online',
  icons: {
    icon: '/logo-no-bg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  {/*<Navbar >
    <Avatar size='sm' showFallback name='User' src="" />
  </Navbar>*/}
  return (
    <html lang="en" >
      <head />
      <body className={`${montserrat.className} antialiased bg-gradient-to-r from-[#174173] to-[#226197] `} >
        <Providers>
          <Navbar />
          <main className="container mx-auto p-4 bg-red-500">
            {children}
          </main>
        </Providers>
      </body>
    </html >

  );
}
