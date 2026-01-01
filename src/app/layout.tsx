import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pairy Design System",
  description: "Button interactions and animation demos for Pairy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-lg">
              Pairy Design System
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/buttons/" className="hover:text-pink-500">
                Buttons
              </Link>
              <Link href="/physics/" className="hover:text-pink-500">
                Physics
              </Link>
              <Link href="/animations/" className="hover:text-pink-500">
                Animations
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
