import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertTriangle, Clock, DollarSign, UserX, Zap, Eye } from "lucide-react";

const BURNOUT_IMAGE = "https://images.unsplash.com/photo-1752650735615-9829d8008a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJub3V0JTIwc3RyZXNzZWQlMjBwcm9mZXNzaW9uYWwlMjB3b3JrJTIwb3ZlcmxvYWR8ZW58MXx8fHwxNzczNzEzMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const problems = [
  {
    icon: UserX,
    color: "#EF4444",
    title: "Rotación invisible",
    desc: "15–25% de rotación anual en perfiles de alto conocimiento. Cada salida cuesta entre 0.5x y 2x el salario anual del empleado.",
    metric: "USD 2.25M",
    metricLabel: "costo anual en empresa de 500 empleados",
  },
  {
    icon: Clock,
    color: "#F59E0B",
    title: "Ausentismo psicológico",
    desc: "6–10 días perdidos por empleado al año por causas de estrés y salud mental. Invisible en el P&L pero real en el EBITDA.",
    metric: "8 días",
    metricLabel: "promedio de ausentismo por estrés/año",
  },
  {
    icon: Zap,
    color: "#8B5CF6",
    title: "Presentismo crónico",
    desc: "El empleado está físicamente pero rinde al 70%. Nadie lo mide. HR no lo ve. Los resultados lo absorben silenciosamente.",
    metric: "−30%",
    metricLabel: "pérdida estimada de productividad individual",
  },
  {
    icon: AlertTriangle,
    color: "#F97316",
    title: "Errores bajo fatiga cognitiva",
    desc: "Decisiones críticas tomadas bajo presión sostenida generan retrabajo, escaladas y daño reputacional que no aparece en ningún dashboard.",
    metric: "Inmeasurable",
    metricLabel: "pero altamente costoso",
  },
  {
    icon: DollarSign,
    color: "#EF4444",
    title: "Conflictos que escalan",
    desc: "La fricción relacional no gestionada consume tiempo de liderazgo, destruye cultura y accelera la desconexión de talento clave.",
    metric: "4 daños",
    metricLabel: "simultáneos por cada despido reactivo",
  },
  {
    icon: Eye,
    color: "#6366F1",
    title: "Operando a ciegas",
    desc: "Las encuestas de clima tienen meses de retraso. Los HRIS son registros, no inteligencia. El burnout no se detecta: se gestiona en crisis.",
    metric: "0",
    metricLabel: "señales tempranas capturadas hoy",
  },
];

function AnimatedCounter({ value }: { value: string }) {
  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: 28,
      fontWeight: 700,
      color: "#EF4444",
    }}>
      {value}
    </span>
  );
}

function ProblemCard({ item, index }: { item: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: "rgba(13,13,26,0.8)",
        border: "1px solid rgba(139,139,200,0.1)",
        borderRadius: 14,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color 0.3s, transform 0.3s",
        cursor: "default",
      }}
      whileHover={{ scale: 1.01 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: `${item.color}15`,
          border: `1px solid ${item.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <item.icon size={18} color={item.color} />
        </div>
        <h3 style={{ margin: 0, color: "#EEEEF5", fontSize: 16, fontWeight: 600 }}>
          {item.title}
        </h3>
      </div>
      <p style={{ margin: 0, color: "#8585A8", fontSize: 14, lineHeight: 1.65 }}>
        {item.desc}
      </p>
      <div style={{
        marginTop: "auto",
        paddingTop: 16,
        borderTop: "1px solid rgba(139,139,200,0.08)",
      }}>
        <div style={{ fontFamily: "monospace", fontSize: 24, fontWeight: 700, color: item.color }}>
          {item.metric}
        </div>
        <div style={{ fontSize: 12, color: "#6060A0", marginTop: 4 }}>
          {item.metricLabel}
        </div>
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" style={{ background: "#07070E", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#EF4444", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              EL PROBLEMA
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
            Los costos que no aparecen<br />en ningún dashboard
          </h2>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto",
          }}>
            Las empresas intensivas en conocimiento pierden valor de forma sistemática
            por factores humanos que hoy no tienen infraestructura para detectar ni gestionar.
          </p>
        </motion.div>

        {/* Asia precedent callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, rgba(239,68,68,0.06), rgba(245,158,11,0.06))",
            border: "1px solid rgba(239,68,68,0.15)",
            borderRadius: 16,
            padding: "32px 40px",
            marginBottom: 60,
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <AlertTriangle size={22} color="#EF4444" />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ color: "#EF4444", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 8 }}>
              SEÑAL TEMPRANA DOCUMENTADA
            </div>
            <p style={{ color: "#EEEEF5", fontSize: 16, lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              Asia ya vivió este experimento antes que Occidente. En Japón, Corea del Sur y China,
              el alto rendimiento sin acompañamiento estructural generó licencias médicas masivas,
              caída de productividad marginal e intervención regulatoria sobre grandes empleadores.{" "}
              <span style={{ color: "#8585A8" }}>
                Occidente está en etapa preventiva. Todavía hay tiempo.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Problem cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {problems.map((item, i) => (
            <ProblemCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
