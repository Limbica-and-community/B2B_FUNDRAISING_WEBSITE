import { motion } from "motion/react";
import { X } from "lucide-react";

const limitationCards = [
  {
    title: "Employee surveys",
    color: "#EF4444",
    limitations: [
      "Miden percepción puntual, no comportamiento real",
      "Resultados disponibles con meses de retraso",
      "Baja tasa de respuesta honesta (sesgo social)",
      "No generan inteligencia, generan reportes",
      "No triggean intervención: solo describen",
    ],
  },
  {
    title: "HRIS tradicionales",
    color: "#F59E0B",
    limitations: [
      "Son registros, no sistemas de inteligencia",
      "Capturan lo que ya pasó, no lo que va a pasar",
      "No detectan señales de estrés ni conflicto",
      "No tienen capa de intervención humana",
      "Orientados a compliance, no a rendimiento",
    ],
  },
  {
    title: "Plataformas de bienestar",
    color: "#8B5CF6",
    limitations: [
      "Posicionadas como beneficio, no como infraestructura",
      "Uso voluntario → sesgo hacia los menos en riesgo",
      "No integran con objetivos de negocio",
      "No generan data organizacional accionable",
      "No distinguen carga personal de estrés laboral",
    ],
  },
];


export function DiffSection() {
  return (
    <section id="diferenciacion" style={{
      background: "linear-gradient(180deg, #090914 0%, #07070E 100%)",
      padding: "100px 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 100,
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#8B5CF6", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              DIFERENCIACIÓN
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#EEEEF5",
            margin: "0 0 20px",
            lineHeight: 1.15,
          }}>
            Por qué lo que tienes hoy<br />no es suficiente
          </h2>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Las soluciones actuales no generan inteligencia organizacional real.
            Capturan datos pero no producen acción preventiva.
          </p>
        </motion.div>

        {/* Limitation cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          marginBottom: 60,
        }}>
          {limitationCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(13,13,26,0.8)",
                border: "1px solid rgba(139,139,200,0.1)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div style={{
                padding: "20px 24px",
                borderBottom: `1px solid ${card.color}20`,
                background: `${card.color}08`,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: card.color }} />
                <span style={{ color: card.color, fontSize: 14, fontWeight: 600 }}>{card.title}</span>
              </div>
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {card.limitations.map((lim, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <X size={14} color="#EF4444" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: "#8585A8", fontSize: 13, lineHeight: 1.55 }}>{lim}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
