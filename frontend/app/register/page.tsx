"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  function register() {
    if (!email || !pass) {
      setErr("All fields are required");
      return;
    }

    localStorage.setItem("token", "demo-token");
    router.push("/dashboard");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {err && <p className="auth-error">{err}</p>}

        <button onClick={register}>Register</button>

        <p className="auth-footer">
          Already registered? Just continue.
        </p>
      </div>
    </section>
  );
}
