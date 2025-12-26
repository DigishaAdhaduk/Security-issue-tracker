export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-pill">● Next-Gen Cybersecurity Solutions</p>

          <h1 className="hero-title">
            Securing Your
            <span>Digital Future</span>
          </h1>

          <p className="hero-desc">
            Advanced threat detection, cloud security, and penetration testing
            designed for the modern enterprise.
          </p>

          <div className="hero-actions">
            <a href="/login" className="btn-primary">
              Get Protected →
            </a>

            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="services-head">
          <h2>Our Services</h2>
          <p>Security solutions designed for modern infrastructure</p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <h3>Cloud Security</h3>
            <p>
              Secure cloud infrastructure with configuration audits,
              continuous monitoring, and proactive threat detection.
            </p>
          </div>

          <div className="service-card">
            <h3>VAPT</h3>
            <p>
              Vulnerability Assessment and Penetration Testing to identify
              weaknesses before attackers exploit them.
            </p>
          </div>

          <div className="service-card">
            <h3>Red Team Assessment</h3>
            <p>
              Simulated real-world attacks to test detection, response,
              and overall security readiness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
