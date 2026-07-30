import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
                { 
                  href: "https://www.behance.net/shwetajadhav11", 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4H10C13 4 14 6 14 9C14 11 13 12 11 12.5C13 13 15 14 15 17C15 20 13 22 9 22H4V4Z"/><path d="M4 12H10"/><path d="M19 8H21"/><path d="M17 12V22"/><path d="M22 12V22"/><path d="M17 17H22"/></svg>, 
                  id: "footer-behance" 
                },
                { 
                  href: "https://www.linkedin.com", 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, 
                  id: "footer-linkedin" 
                },
                { 
                  href: "https://github.com", 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>, 
                  id: "footer-github" 
                },
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
