"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">APNISEC</div>

      <div className="nav-center">
        <Link className="nav-link" href="/">
          Home
        </Link>

        <Link className="nav-link" href="/#services">
          Services
        </Link>

        <Link className="nav-link" href="/dashboard">
          Dashboard
        </Link>
      </div>

      <Link className="nav-login" href="/register">
        Get Protected
      </Link>
    </nav>
  );
}
