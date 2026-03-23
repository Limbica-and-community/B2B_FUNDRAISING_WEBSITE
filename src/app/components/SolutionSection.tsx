import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Radio, Cpu, Heart } from "lucide-react";

const HUMAN_IMAGE = "https://images.unsplash.com/photo-1758273240631-59d44c8f5b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGNvbm5lY3Rpb24lMjBjb3Vuc2VsaW5nJTIwc3VwcG9ydCUyMGNvbnZlcnNhdGlvbnxlbnwxfHx8fDE3NzM3MTMzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const layers = [
  {
    number: "01",
    icon: Radio,
    title: "Organizational Signal Layer",
    subtitle: "Captura de micro-eventos",
    description:
      "Detecta y registra señales organizacionales en tiempo real, garantizando la seguridad de la empresa y sus empleados mediante una robusta anonimización. Los datos se agregan de grupos de 20+ trabajadores para asegurar el foco en patrones colectivos, nunca para el control individual.",
    features: [
      "Anonimización de seguridad empresarial",
      "Datos agregados (20+ trabajadores)",
      "Sin seguimiento individual",
      "Detección de presión operativa",
    ],
    color: "#6366F1",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04))",
    border: "rgba(99,102,241,0.25)",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analysis Layer - Heimdall Analytics",
    subtitle: "Detección de patrones invisibles",
    description:
      "Los modelos de IA de Heimdall Analytics, entrenados en el ciclo de vida laboral, detectan patrones que el análisis tradicional no puede ver. El sistema prioriza riesgos, identifica equipos en zona crítica y predice eventos de deterioro de forma preventiva.",
    features: [
      "Predicción de riesgo de burnout",
      "Análisis de rotación anticipada",
      "Detección de conflictos latentes",
      "Scoring preventivo por equipos",
    ],
    color: "#0091FF",
    gradient: "linear-gradient(135deg, rgba(0,145,255,0.12), rgba(0,145,255,0.04))",
    border: "rgba(0,145,255,0.25)",
  },
  {
    number: "03",
    icon: Heart,
    title: "Human Support Layer - Charlasana",
    subtitle: "Intervención humana estructural",
    description:
      "Cuando el sistema detecta riesgo organizacional a través de Charlasana, profesionales humanos intervienen. Consejeros para carga emocional y coaches para foco laboral. No patologizamos: optimizamos de forma estructural.",
    features: [
      "Consejeros para carga emocional",
      "Coaches de foco y productividad",
      "Intervención preventivo-estructural",
      "Soporte organizacional especializado",
    ],
    color: "#00CFA1",
    gradient: "linear-gradient(135deg, rgba(0,207,161,0.12), rgba(0,207,161,0.04))",
    border: "rgba(0,207,161,0.25)",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucion" style={{
      background: "#07070E",
      padding: "100px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background image subtle */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "40%",
        backgroundImage: `url(${HUMAN_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
        maskImage: "linear-gradient(to left, rgba(0,0,0,0.4), transparent)",
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.4), transparent)",
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
            background: "rgba(0,145,255,0.1)",
            border: "1px solid rgba(0,145,255,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#0091FF", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              LA SOLUCIÓN
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
            Una plataforma. Tres capas.<br />Un sistema completo.
          </h2>
          {/* Logos Section */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "64px",
            marginBottom: "64px",
            opacity: 0.95
          }}>
            <img
              src="/logo_charlasana.png"
              alt="Charlasana Logo"
              style={{ height: "240px", objectFit: "contain" }}
            />
            <div style={{ width: "2px", height: "180px", background: "rgba(255,255,255,0.15)" }} />
            <img
              src="/logo_heimdallanalytica.png"
              alt="Heimdall Analitica Logo"
              style={{ height: "240px", objectFit: "contain" }}
            />
          </div>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Charlasana es una infraestructura preventiva que acompaña todo el ciclo de vida del trabajador, diseñada para integrarse de forma nativa en la operación real de tu empresa, impulsada por Heimdall Analytica.
          </p>
        </motion.div>

        {/* Layers */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: layer.gradient,
                border: `1px solid ${layer.border}`,
                borderRadius: 20,
                padding: "36px 40px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 32,
                alignItems: "start",
              }}
            >
              {/* Number + Icon */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: layer.color,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}>
                  {layer.number}
                </div>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${layer.color}15`,
                  border: `1px solid ${layer.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <layer.icon size={24} color={layer.color} />
                </div>
              </div>

              {/* Content */}
              <div>
                <div style={{ fontSize: 12, color: layer.color, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 8 }}>
                  {layer.subtitle}
                </div>
                <h3 style={{
                  margin: "0 0 14px",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "#EEEEF5",
                  letterSpacing: "-0.02em",
                }}>
                  {layer.title}
                </h3>
                <p style={{ margin: 0, color: "#8585A8", fontSize: 15, lineHeight: 1.7 }}>
                  {layer.description}
                </p>
              </div>

              {/* Features */}
              <div style={{
                minWidth: 220,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
                className="hidden lg:flex"
              >
                {layer.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%",
                      background: `${layer.color}15`,
                      border: `1px solid ${layer.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: layer.color }} />
                    </div>
                    <span style={{ color: "#8585A8", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 60,
            padding: "36px 40px",
            borderRadius: 16,
            background: "rgba(13,13,26,0.8)",
            border: "1px solid rgba(139,139,200,0.1)",
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "#8B5CF6", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 10 }}>
              CONSEJEROS PERSONALES
            </div>
            <p style={{ margin: 0, color: "#EEEEF5", fontSize: 15, lineHeight: 1.65, fontWeight: 500 }}>
              Reducen la carga emocional privada que impacta silenciosamente en el rendimiento laboral.
              El objetivo es estabilizar al colaborador, no medicalizarlo.
            </p>
          </div>
          <div style={{ background: "rgba(139,139,200,0.1)", alignSelf: "stretch" }} />
          <div>
            <div style={{ color: "#00CFA1", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 10 }}>
              COACHES DE FOCO Y PRODUCTIVIDAD
            </div>
            <p style={{ margin: 0, color: "#EEEEF5", fontSize: 15, lineHeight: 1.65, fontWeight: 500 }}>
              Optimizan directamente el rendimiento cognitivo, la claridad de objetivos y la gestión del estrés operativo.
              El objetivo es mejorar performance sin aumentar horas ni presión.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
