import Link from "next/link";
import { Linkedin, Figma, Github, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      style={{
        background: "var(--charcoal)",
        color: "var(--ivory)",
        padding: "5rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Shweta<span style={{ color: "var(--gold)" }}>.</span>
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "260px",
              }}
            >
              Graphic Designer & Visual Storyteller crafting luxury brand
              experiences from Pune, India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              Get in Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <a
                href="mailto:Shwetanjadhav2018@gmail.com"
                id="footer-email"
                style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={14} style={{ color: "var(--gold)" }} />
                Shwetanjadhav2018@gmail.com
              </a>
              <a
                href="tel:+919307081860"
                id="footer-phone"
                style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Phone size={14} style={{ color: "var(--gold)" }} />
                +91 93070 81860
              </a>
              <span style={{ color: "var(--text-muted)", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={14} style={{ color: "var(--gold)" }} />
                Pune, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              Follow Along
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { href: "https://www.behance.net/shwetajadhav11", icon: <Figma size={18} />, id: "footer-behance" },
                { href: "https://www.linkedin.com", icon: <Linkedin size={18} />, id: "footer-linkedin" },
                { href: "https://github.com", icon: <Github size={18} />, id: "footer-github" },
              ].map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(201,169,110,0.3)",
                    color: "var(--gold-light)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    borderRadius: "2px",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            © {year} Shweta Jadhav. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            Designed with <span style={{ color: "var(--gold)" }}>♥</span> in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}