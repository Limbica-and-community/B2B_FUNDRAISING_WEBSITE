import { motion } from "motion/react";
import { ArrowRight, TrendingDown, Users, Brain } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1670383050616-682df7d57b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZyUyMG1vZGVybiUyMG9mZmljZSUyMGRhcmt8ZW58MXx8fHwxNzczNzEzMzA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { icon: TrendingDown, value: "15–25%", label: "Rotación anual en talento clave", color: "#EF4444" },
  { icon: Users, value: "0.75x", label: "Costo de reemplazo por salario", color: "#F59E0B" },
  { icon: Brain, value: "30%", label: "Pérdida productividad por presentismo", color: "#8B5CF6" },
];

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#07070E",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.08,
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139,139,200,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,139,200,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,207,161,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,145,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            border: "1px solid rgba(0,207,161,0.3)",
            background: "rgba(0,207,161,0.06)",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00CFA1", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#00CFA1", fontSize: 13, fontWeight: 500, letterSpacing: "0.05em" }}>
              B2B · Human Capital Infrastructure
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ textAlign: "center", marginBottom: 28 }}
        >
          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "#EEEEF5",
            margin: 0,
          }}>
            Cada empresa gestiona<br />
            <span style={{
              background: "linear-gradient(90deg, #00CFA1, #0091FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              datos financieros
            </span>{" "}en tiempo real.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 44px)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "#5555A0",
            margin: 0,
          }}>
            Casi ninguna entiende sus{" "}
            <span style={{ color: "#EEEEF5" }}>sistemas humanos.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            color: "#8585A8",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 48px",
          }}
        >
          Charlasana es infraestructura preventiva de rendimiento humano. No es un beneficio de bienestar.
          Es la capa de soporte que permite a las organizaciones sostener alto rendimiento sin degradar su capital más valioso.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}
        >
          <a
            href="#demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #00CFA1, #00A87E)",
              color: "#07070E",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 30px rgba(0,207,161,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(0,207,161,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0,207,161,0.25)";
            }}
          >
            Solicitar Demo
            <ArrowRight size={18} />
          </a>
          <a
            href="#roi"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 10,
              border: "1px solid rgba(139,139,200,0.2)",
              background: "rgba(139,139,200,0.05)",
              color: "#EEEEF5",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,139,200,0.4)";
              e.currentTarget.style.background = "rgba(139,139,200,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,139,200,0.2)";
              e.currentTarget.style.background = "rgba(139,139,200,0.05)";
            }}
          >
            Ver ROI estimado
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(139,139,200,0.12)",
            background: "rgba(139,139,200,0.06)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                borderRight: i < stats.length - 1 ? "1px solid rgba(139,139,200,0.08)" : "none",
                background: "rgba(7,7,14,0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <stat.icon size={16} color={stat.color} />
                <span style={{ fontSize: 13, color: "#8585A8", letterSpacing: "0.02em" }}>
                  {stat.label}
                </span>
              </div>
              <span style={{
                fontFamily: "monospace",
                fontSize: 32,
                fontWeight: 700,
                color: stat.color,
                letterSpacing: "-0.02em",
              }}>
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        background: "linear-gradient(transparent, #07070E)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
