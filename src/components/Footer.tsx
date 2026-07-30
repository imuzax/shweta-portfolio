"use client";

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
                  href: "https://www.instagram.com", 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, 
                  id: "footer-instagram" 
                },
                { 
                  href: "https://www.pinterest.com", 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.36 9.28-.09-.79-.17-2.01.03-2.88.19-.79 1.23-5.21 1.23-5.21s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.25-.88 3.5-.25 1.05.53 1.91 1.56 1.91 1.88 0 3.32-1.98 3.32-4.84 0-2.53-1.82-4.3-4.41-4.3-3.01 0-4.78 2.26-4.78 4.59 0 .91.35 1.88.79 2.41.09.11.1.2.07.31-.08.33-.26 1.05-.29 1.2-.05.19-.16.23-.37.14-1.39-.65-2.26-2.68-2.26-4.32 0-3.52 2.56-6.75 7.37-6.75 3.87 0 6.88 2.76 6.88 6.45 0 3.84-2.42 6.94-5.78 6.94-1.13 0-2.19-.59-2.55-1.28l-.7 2.65c-.25.97-.93 2.18-1.39 2.92A10.02 10.02 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>, 
                  id: "footer-pinterest" 
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
