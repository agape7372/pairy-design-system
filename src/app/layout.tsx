import type { Metadata } from "next";
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
            <a href="/pairy-design-system/" className="font-bold text-lg">
              Pairy Design System
            </a>
            <div className="flex gap-4 text-sm">
              <a href="/pairy-design-system/buttons/" className="hover:text-pink-500">
                Buttons
              </a>
              <a href="/pairy-design-system/physics/" className="hover:text-pink-500">
                Physics
              </a>
              <a href="/pairy-design-system/animations/" className="hover:text-pink-500">
                Animations
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
