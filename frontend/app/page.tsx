import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <h1>Securing Your Digital Future</h1>
      <p className="hero-sub">
        Cloud Security, VAPT & Red Team Assessments made simple.
      </p>

      <div className="hero-buttons">
        <Link href="/register" className="primary-btn">
          Get Protected
        </Link>
        <Link href="/dashboard" className="secondary-btn">
          View Dashboard
        </Link>
      </div>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Cloud Security</h3>
            <p>Protect cloud infrastructure from misconfigurations.</p>
          </div>

          <div className="service-card">
            <h3>VAPT</h3>
            <p>Identify vulnerabilities before attackers do.</p>
          </div>

          <div className="service-card">
            <h3>Red Team Assessment</h3>
            <p>Simulate real-world cyber attacks.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
