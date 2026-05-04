import type { Metadata } from "next";
// @ts-ignore: side-effect import of global CSS
import "./globals.css";

export const metadata: Metadata = {
  title:       "Yamikani Suwedi — Full-Stack Developer",
  description: "Full-stack developer specialising in scalable backend systems and modern web interfaces. FastAPI · PostgreSQL · Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}