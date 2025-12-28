import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="hero">
        <div className="hero-content">
          <span className="hero-pill">Next-Gen Cybersecurity Solutions</span>

          <h1 className="hero-title">
            Securing Your
            <span>Digital Future</span>
          </h1>

          <p className="hero-desc">
            Advanced threat detection, cloud security, and penetration testing
            designed for the modern enterprise.
          </p>

          <div className="hero-actions">
            <Link href="/register" className="btn-primary">
              Get Protected →
            </Link>

            <Link href="#services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </main>

      {/* SERVICES SECTION */}
      <section id="services" className="services">
        <div className="services-head">
          <h2>Our Expertise</h2>
          <p>Comprehensive security services tailored to your needs</p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <h3>Cloud Security</h3>
            <p>
              Secure your cloud infrastructure with advanced configuration
              auditing and threat monitoring.
            </p>
          </div>

          <div className="service-card">
            <h3>VAPT</h3>
            <p>
              Vulnerability Assessment and Penetration Testing to identify weak
              points before attackers do.
            </p>
          </div>

          <div className="service-card">
            <h3>Red Team Assessment</h3>
            <p>
              Simulated real-world attacks to test your organization’s detection
              and response capabilities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
