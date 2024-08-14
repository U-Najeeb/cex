import { Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Appbar from "@/components/Appbar";
import { Providers } from "./providers";

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontPoppins.variable
        )}
      >
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
