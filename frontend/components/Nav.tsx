"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">APNISEC</span>
      </div>

      <nav className="nav-center">
        <Link href="/" className="nav-link">Home</Link>

        {/* Services scrolls on home */}
        <a href="/#services" className="nav-link">
          Services
        </a>

        {/* Dashboard route */}
        <Link href="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </nav>


    </header>
  );
}
