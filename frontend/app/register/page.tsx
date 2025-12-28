"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  function register() {
    setErr("");

    if (!email || !pass) {
      setErr("All fields are required");
      return;
    }

    // frontend-only auth (intentional for submission)
    localStorage.setItem("token", "demo-token");
    router.push("/dashboard");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">
          Secure your infrastructure with ApniSec
        </p>

        <input
          className="auth-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {err && <p className="auth-error">{err}</p>}

        <button className="auth-btn" onClick={register}>
          Register
        </button>

        <p className="auth-footer">
          Already registered? Just continue to dashboard
        </p>
      </div>
    </section>
  );
}
