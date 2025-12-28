"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">APNISEC</div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
