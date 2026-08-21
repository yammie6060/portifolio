// app/components/ClientLayout.tsx
"use client";

import Navbar from "./Nav";
import Footer from "./Footer";
// import Cursor from "./Cursor"; // Option 1: Uncomment for cursor

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Cursor /> */} {/* Option 1: Uncomment for cursor */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}