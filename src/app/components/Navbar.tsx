import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "El Problema", href: "#problema" },
    { label: "La Solución", href: "#solucion" },
    { label: "ROI", href: "#roi" },
    { label: "Diferenciación", href: "#diferenciacion" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid rgba(139, 139, 200, 0.1)" : "1px solid transparent",
        background: scrolled ? "rgba(7, 7, 14, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/limbica_high_res_transparent.png" alt="Limbica Logo" style={{ width: 260, height: "auto", objectFit: "contain" }} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "#8585A8",
                  textDecoration: "none",
                  fontSize: 14,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEF5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8585A8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 12 }}>
            <a
              href="#demo"
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #00CFA1, #00A87E)",
                color: "#07070E",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 24, height: 2, background: "#8585A8", borderRadius: 2 }} />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgba(139,139,200,0.1)",
            padding: "16px 0",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#8585A8", textDecoration: "none", fontSize: 15 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #00CFA1, #00A87E)",
                color: "#07070E",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Solicitar Demo
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
