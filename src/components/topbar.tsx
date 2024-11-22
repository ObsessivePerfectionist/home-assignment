"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  return (
    <main className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background z-50 px-4 md:px-6">
      <div className="flex w-full justify-between items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <h1
                className=
                  "text-2xl font-bold hover:underline decoration-primary"
              >
                Atlar Bank
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
