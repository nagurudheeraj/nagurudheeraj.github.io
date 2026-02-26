import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandBox from "@/components/CommandBox";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

// const biotif = localfont({
//   src: [
//     {
//       path: "public/static/font/Biotif-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "@/static/font/Biotif-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-biotif",
// });

// const neuzeit = localfont({
//   src: [
//     {
//       path: "@/static/font/NeuzeitGrotesk-bold.woff2",
//       weight: "900",
//       style: "Bold",
//     },
//   ],
//   variable: "--font-neuzeit",
// });

export const metadata: Metadata = {
  title: "Dheeraj Naguru",
  description: "Dheeraj Naguru's Portfolio",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋🏻</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="lg:hidden fixed inset-0 flex text-center justify-center bg-gray-800 text-white bg-black">
            <p className="text-sm font-sans m-10">
              Mobile view is under construction. For the best experience, please
              use a laptop.
            </p>
          </div>

          <div className="lg:block hidden">
            <div className="flex flex-col min-h-screen relative">
              <CommandBox>
                <Navbar />
                <Wrapper>{children}</Wrapper>
                <Footer />
              </CommandBox>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
