import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Network } from "lucide-react";

const ANALYTICS_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MzcxMzMwNXww&ixlib=rb-4.1.0&q=80&w=1080";

const graphs = [
  {
    company: "LinkedIn",
    graph: "Grafo profesional",
    desc: "Mapeó relaciones entre profesionales y habilidades a escala global.",
    color: "#0A66C2",
    dot: "🔵",
  },
  {
    company: "Palantir",
    graph: "Grafo de inteligencia",
    desc: "Detectó patrones de riesgo en sistemas complejos de datos gubernamentales.",
    color: "#6366F1",
    dot: "🟣",
  },
  {
    company: "Google",
    graph: "Grafo de información",
    desc: "Organizó el conocimiento mundial en un sistema de relevancia en tiempo real.",
    color: "#EA4335",
    dot: "🔴",
  },
  {
    company: "Heimdall Analitica",
    graph: "Grafo organizacional",
    desc: "Mapea bienestar, riesgo y comportamiento laboral dentro de cada organización.",
    color: "#00CFA1",
    dot: "🟢",
    highlight: true,
  },
];

export function ParadigmSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{
      background: "linear-gradient(180deg, #07070E 0%, #0A0A16 50%, #07070E 100%)",
      padding: "100px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative bg */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${ANALYTICS_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.04,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 100,
            background: "rgba(0,207,161,0.1)",
            border: "1px solid rgba(0,207,161,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#00CFA1", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              EL CAMBIO DE PARADIGMA
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
            Las empresas líderes construyeron<br />grafos de comportamiento humano
          </h2>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto",
          }}>
            Cada empresa transformadora de la última década capturó inteligencia sobre
            un sistema complejo. La siguiente frontera es la organización misma.
          </p>
        </motion.div>

        {/* Graph comparison */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginBottom: 72,
        }}>
          {graphs.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: g.highlight
                  ? "linear-gradient(135deg, rgba(0,207,161,0.08), rgba(0,145,255,0.08))"
                  : "rgba(13,13,26,0.8)",
                border: g.highlight
                  ? "1px solid rgba(0,207,161,0.3)"
                  : "1px solid rgba(139,139,200,0.1)",
                borderRadius: 16,
                padding: "28px 24px",
                position: "relative",
              }}
            >
              {g.highlight && (
                <div style={{
                  position: "absolute",
                  top: -1, left: -1, right: -1,
                  height: 2,
                  background: "linear-gradient(90deg, #00CFA1, #0091FF)",
                  borderRadius: "16px 16px 0 0",
                }} />
              )}
              <div style={{
                fontSize: 20,
                marginBottom: 12,
              }}>
                {g.dot}
              </div>
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: g.color,
                letterSpacing: "0.04em",
                marginBottom: 6,
              }}>
                {g.company}
              </div>
              <div style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#EEEEF5",
                marginBottom: 12,
                lineHeight: 1.3,
              }}>
                {g.graph}
              </div>
              <p style={{ margin: 0, color: "#8585A8", fontSize: 14, lineHeight: 1.6 }}>
                {g.desc}
              </p>
              {g.highlight && (
                <div style={{
                  marginTop: 20,
                  padding: "8px 14px",
                  borderRadius: 8,
                  background: "rgba(0,207,161,0.1)",
                  border: "1px solid rgba(0,207,161,0.2)",
                  fontSize: 12,
                  color: "#00CFA1",
                  fontWeight: 500,
                }}>
                  → Tu organización, en tiempo real
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Organizational Intelligence concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(13,13,26,0.9)",
            border: "1px solid rgba(139,139,200,0.12)",
            borderRadius: 20,
            padding: "48px 48px",
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 auto" }}>
            <div style={{
              width: 80, height: 80, borderRadius: 20,
              background: "linear-gradient(135deg, rgba(0,207,161,0.15), rgba(0,145,255,0.15))",
              border: "1px solid rgba(0,207,161,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Network size={36} color="#00CFA1" />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ color: "#00CFA1", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 12 }}>
              ORGANIZATIONAL INTELLIGENCE
            </div>
            <h3 style={{
              fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 700,
              color: "#EEEEF5",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}>
              “Entendemos las causas profundas<br />
              y actuamos de forma preventiva<br />
              en tiempo real. Eso es Charlasana.”
            </h3>
          </div>
          <div style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minWidth: 200,
          }}>
            {[
              { era: "Era anterior", label: "Data-driven, productivity-first", color: "#6060A0" },
              { era: "Era Charlasana", label: "Human-first, performance-safe", color: "#00CFA1" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "14px 18px",
                borderRadius: 10,
                border: `1px solid ${item.color}30`,
                background: `${item.color}08`,
              }}>
                <div style={{ fontSize: 11, color: item.color, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 4 }}>
                  {item.era}
                </div>
                <div style={{ fontSize: 13, color: "#EEEEF5", fontWeight: 500 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
