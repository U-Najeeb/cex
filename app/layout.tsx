import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Appbar from "@/components/Appbar";
import { Providers } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
          fontSans.variable
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
