import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="hero-left">
        <h1>
          Securing <br /> Your Digital Future
        </h1>

        <p>
          Cloud Security, VAPT & Red Team Assessments made simple.
        </p>

        <Link href="/register" className="cta-btn">
          Get Protected
        </Link>
      </div>

      <div id="services" className="services">
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
    </main>
  );
}
