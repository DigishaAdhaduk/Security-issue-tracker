import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <h1 className="hero-title">Securing Your Digital Future</h1>
      <p className="hero-sub">
        Enterprise-grade security assessments for modern infrastructure
      </p>

      <div className="hero-actions">
        <Link href="/register" className="btn-primary">
          Get Protected
        </Link>

        <a href="#services" className="btn-secondary">
          View Services
        </a>
      </div>

      <section id="services" className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Cloud Security</h3>
            <p>Secure your cloud workloads and infrastructure</p>
          </div>

          <div className="service-card">
            <h3>VAPT</h3>
            <p>Identify vulnerabilities before attackers do</p>
          </div>

          <div className="service-card">
            <h3>Red Team Assessment</h3>
            <p>Simulated attacks to test real-world readiness</p>
          </div>
        </div>
      </section>
    </section>
  );
}
