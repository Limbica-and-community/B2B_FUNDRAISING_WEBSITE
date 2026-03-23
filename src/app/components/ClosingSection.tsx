import { motion } from "motion/react";
import { ArrowRight, Building2, Users, Briefcase, ChartBarBig } from "lucide-react";

const targetAudience = [
  { icon: Building2, label: "CEOs", sub: "100–5,000 empleados" },
  { icon: Users, label: "Chief People Officer", sub: "Estrategia de capital humano" },
  { icon: Briefcase, label: "HRBP & People Leaders", sub: "Gestión del ciclo laboral" },
  { icon: ChartBarBig, label: "CFOs & Finance", sub: "ROI medible y defendible" },
];

export function ClosingSection() {
  return (
    <section id="demo" style={{
      background: "linear-gradient(180deg, #07070E 0%, #09091A 100%)",
      padding: "100px 0 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,207,161,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,207,161,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,207,161,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Main closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 100,
            background: "rgba(0,207,161,0.1)",
            border: "1px solid rgba(0,207,161,0.25)",
            marginBottom: 32,
          }}>
            <span style={{ color: "#00CFA1", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              CHARLASANA · INFRAESTRUCTURA DE RENDIMIENTO HUMANO
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#EEEEF5",
            margin: "0 0 28px",
            lineHeight: 1.1,
          }}>
            Las empresas del futuro<br />
            no solo gestionarán personas.<br />
            <span style={{
              background: "linear-gradient(90deg, #00CFA1, #0091FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Gestionarán inteligencia organizacional.
            </span>
          </h2>

          <p style={{
            color: "#8585A8",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 16px",
          }}>
            Charlasana no baja la vara del rendimiento.
          </p>
          <p style={{
            color: "#EEEEF5",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 56px",
            fontWeight: 600,
          }}>
            La hace sostenible.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 40px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #00CFA1, #00A87E)",
                color: "#07070E",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(0,207,161,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(0,207,161,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,207,161,0.3)";
              }}
            >
              Solicitar Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hola@charlasana.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 40px",
                borderRadius: 12,
                border: "1px solid rgba(139,139,200,0.2)",
                background: "rgba(139,139,200,0.05)",
                color: "#EEEEF5",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,139,200,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(139,139,200,0.2)"; }}
            >
              Contactar equipo
            </a>
          </div>
        </motion.div>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(139,139,200,0.1)",
            marginBottom: 80,
          }}
        >
          {targetAudience.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                background: "rgba(13,13,26,0.8)",
                borderRight: i < targetAudience.length - 1 ? "1px solid rgba(139,139,200,0.08)" : "none",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: "rgba(0,207,161,0.1)",
                border: "1px solid rgba(0,207,161,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <t.icon size={22} color="#00CFA1" />
              </div>
              <div>
                <div style={{ color: "#EEEEF5", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                  {t.label}
                </div>
                <div style={{ color: "#6060A0", fontSize: 13 }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Demo form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(13,13,26,0.9)",
            border: "1px solid rgba(0,207,161,0.15)",
            borderRadius: 24,
            padding: "48px 40px",
            maxWidth: 680,
            margin: "0 auto 100px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h3 style={{
              margin: "0 0 12px",
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 700,
              color: "#EEEEF5",
              letterSpacing: "-0.02em",
            }}>
              Solicitar una demo
            </h3>
            <p style={{ margin: 0, color: "#8585A8", fontSize: 15, lineHeight: 1.6 }}>
              En 30 minutos mostramos cómo Charlasana se integra a tu operación
              y qué señales organizacionales puedes capturar en las primeras semanas.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Nombre", placeholder: "Tu nombre" },
                { label: "Cargo", placeholder: "CEO / CPO / HRBP" },
              ].map((field) => (
                <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 13, color: "#8585A8", fontWeight: 500 }}>{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1px solid rgba(139,139,200,0.15)",
                      background: "rgba(7,7,14,0.6)",
                      color: "#EEEEF5",
                      fontSize: 14,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,207,161,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(139,139,200,0.15)"; }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 13, color: "#8585A8", fontWeight: 500 }}>Email corporativo</label>
              <input
                type="email"
                placeholder="nombre@empresa.com"
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid rgba(139,139,200,0.15)",
                  background: "rgba(7,7,14,0.6)",
                  color: "#EEEEF5",
                  fontSize: 14,
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,207,161,0.4)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(139,139,200,0.15)"; }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, color: "#8585A8", fontWeight: 500 }}>Empresa</label>
                <input
                  type="text"
                  placeholder="Nombre de la empresa"
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(139,139,200,0.15)",
                    background: "rgba(7,7,14,0.6)",
                    color: "#EEEEF5",
                    fontSize: 14,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,207,161,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(139,139,200,0.15)"; }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, color: "#8585A8", fontWeight: 500 }}>Número de empleados</label>
                <select
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(139,139,200,0.15)",
                    background: "rgba(7,7,14,0.9)",
                    color: "#EEEEF5",
                    fontSize: 14,
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Seleccionar</option>
                  <option>100–250</option>
                  <option>250–500</option>
                  <option>500–1,000</option>
                  <option>1,000–5,000</option>
                  <option>+5,000</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "15px 32px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #00CFA1, #00A87E)",
                border: "none",
                color: "#07070E",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Solicitar Demo
              <ArrowRight size={18} />
            </button>

            <p style={{ margin: 0, textAlign: "center", fontSize: 12, color: "#4040A0" }}>
              Sin compromiso. Respuesta en menos de 24 horas.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}