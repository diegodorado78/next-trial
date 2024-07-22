import { Metadata } from "next";
import "../ui/globals.css";
import { Providers } from "./providers";
import { montserrat } from "@/ui/fonts";
import Navbar from "./components/navbar";
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

  return (
    <html lang="en" >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`flex flex-col w-full justify-center items-center ${montserrat.className} antialiased bg-gradient-to-r from-[#174173] to-[#226197] p-2 border `} >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html >

  );
}
