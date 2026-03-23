export function Footer() {
  return (
    <footer style={{
      background: "#07070E",
      borderTop: "1px solid rgba(139,139,200,0.08)",
      padding: "40px 24px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: "linear-gradient(135deg, #00CFA1, #0091FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#07070E", fontSize: 12, fontWeight: 700 }}>C</span>
          </div>
          <span style={{ color: "#EEEEF5", fontSize: 15, fontWeight: 600 }}>Charlasana</span>
          <span style={{ color: "#4040A0", fontSize: 13 }}>· Human Performance Infrastructure</span>
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Privacidad", "Términos", "Seguridad", "hola@charlasana.com"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#6060A0",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#8585A8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6060A0"; }}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ color: "#3535A0", fontSize: 12 }}>
          © 2025 Charlasana · B2B SaaS · LATAM
        </div>
      </div>
    </footer>
  );
}
