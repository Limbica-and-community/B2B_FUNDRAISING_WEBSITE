import { motion } from "motion/react";
import { Flame, GitMerge, UserCheck, Globe, Users2, ArrowUpRight } from "lucide-react";

const useCases = [
  {
    icon: Flame,
    color: "#EF4444",
    title: "Detección temprana de burnout",
    desc: "El sistema captura señales de fatiga cognitiva acumulada antes de que el colaborador lo verbalice o lo note HR. Se interviene en el momento óptimo, no en crisis.",
    kpi: "−40% de licencias médicas psicológicas en 12 meses",
  },
  {
    icon: GitMerge,
    color: "#F59E0B",
    title: "Resolución de conflictos relacionales",
    desc: "Conflictos entre pares y con liderazgo detectados en etapa temprana. Intervención profesional antes de que escalen a HR, Legal o afecten al equipo entero.",
    kpi: "−60% de escaladas a RRHH por conflicto",
  },
  {
    icon: UserCheck,
    color: "#10B981",
    title: "Prevención de rotación voluntaria",
    desc: "El desenganche progresivo se detecta semanas antes de la renuncia. La organización puede actuar con claridad narrativa y propuesta concreta, no reactividad.",
    kpi: "−15 a 20% de rotación voluntaria en perfiles clave",
  },
  {
    icon: Globe,
    color: "#6366F1",
    title: "Inteligencia cultural organizacional",
    desc: "Un mapa continuo del estado real de la cultura: qué equipos están cohesionados, cuáles tienen fricción, qué líderes generan bienestar o lo drenan.",
    kpi: "Mapa cultural actualizado en tiempo real",
  },
  {
    icon: Users2,
    color: "#0091FF",
    title: "Optimización de equipos de alto rendimiento",
    desc: "Datos para decisiones de diseño organizacional: composición de equipos, carga operativa, alineación de expectativas. No intuición, inteligencia.",
    kpi: "+5–10% mejora en foco operativo por equipo",
  },
  {
    icon: ArrowUpRight,
    color: "#00CFA1",
    title: "Managed Exit™ — Separación gestionada",
    desc: "El despido no gestionado genera 4 daños simultáneos. Charlasana opera antes, durante y después: pre-termination support, contención emocional y protección del equipo que queda.",
    kpi: "−35% rotación secundaria post-despido",
  },
];

export function UseCasesSection() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #07070E 0%, #090914 100%)",
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
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#6366F1", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              CASOS DE USO
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
            Charlasana actúa en los momentos<br />que más cuestan
          </h2>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            El rendimiento cae no por falta de talento, sino por acumulación de eventos no amortiguados.
            Charlasana interviene entre esos puntos críticos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: "rgba(13,13,26,0.8)",
                border: "1px solid rgba(139,139,200,0.1)",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                cursor: "default",
                transition: "border-color 0.3s",
              }}
              whileHover={{ borderColor: `${uc.color}40` } as any}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${uc.color}12`,
                  border: `1px solid ${uc.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <uc.icon size={20} color={uc.color} />
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#EEEEF5",
                  lineHeight: 1.3,
                }}>
                  {uc.title}
                </h3>
              </div>

              <p style={{ margin: 0, color: "#8585A8", fontSize: 14, lineHeight: 1.65, flex: 1 }}>
                {uc.desc}
              </p>

              <div style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: `${uc.color}08`,
                border: `1px solid ${uc.color}20`,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: uc.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: uc.color, fontWeight: 500 }}>{uc.kpi}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
