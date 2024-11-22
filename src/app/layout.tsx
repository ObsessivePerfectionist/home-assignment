import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-hidden">
      <body className={inter.className}>
                  <div className="flex flex-row h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full overflow-hidden z-[1]">
              <Topbar />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
