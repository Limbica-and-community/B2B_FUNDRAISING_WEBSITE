import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, Legend,
} from "recharts";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const roiData = [
  { name: "Costo rotación\nactual", value: 2250000, color: "#EF4444", label: "USD 2.25M" },
  { name: "Costo Charlasana", value: 90000, color: "#0091FF", label: "USD 90K" },
  { name: "Ahorro rotación\n(−15%)", value: 337500, color: "#00CFA1", label: "USD 337.5K" },
];

const kpiCards = [
  {
    icon: TrendingUp,
    color: "#00CFA1",
    value: "3.7x",
    label: "ROI directo estimado",
    sub: "Solo por reducción de rotación",
  },
  {
    icon: DollarSign,
    color: "#F59E0B",
    value: "USD 337.5K",
    label: "Ahorro anual estimado",
    sub: "Empresa 500 personas · reducción 15%",
  },
  {
    icon: Calculator,
    color: "#6366F1",
    value: "USD 90K/año",
    label: "Costo Charlasana",
    sub: "USD 15 por usuario/mes · contrato anual",
  },
];

const impactMetrics = [
  { metric: "Reducción de rotación voluntaria", range: "10–20%", impact: "directo", color: "#00CFA1" },
  { metric: "Reducción de días de ausentismo", range: "1–3 días/empleado/año", impact: "directo", color: "#10B981" },
  { metric: "Mejora en foco operativo", range: "+5–10%", impact: "directo", color: "#0091FF" },
  { metric: "Reducción de errores y retrabajo", range: "medible en 6 meses", impact: "indirecto", color: "#6366F1" },
  { metric: "Mejora en eNPS / clima laboral", range: "+8–15 puntos", impact: "directo", color: "#8B5CF6" },
  { metric: "Rotación secundaria post-despido", range: "−30–40%", impact: "indirecto", color: "#F59E0B" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#0D0D1A",
        border: "1px solid rgba(139,139,200,0.2)",
        borderRadius: 10,
        padding: "12px 16px",
      }}>
        <div style={{ color: "#8585A8", fontSize: 12, marginBottom: 4 }}>{label}</div>
        <div style={{ color: "#EEEEF5", fontSize: 18, fontWeight: 700, fontFamily: "monospace" }}>
          USD {payload[0].value.toLocaleString()}
        </div>
      </div>
    );
  }
  return null;
};

export function ROISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [employees, setEmployees] = useState(500);
  const [salary, setSalary] = useState(30000);

  const rotationRate = 0.20;
  const replacementCost = 0.75;
  const charlasanaCost = 15 * 12; // per user per year

  const annualRotationCost = employees * rotationRate * salary * replacementCost;
  const totalCharlasana = employees * charlasanaCost;
  const savings = annualRotationCost * 0.15;
  const roi = savings / totalCharlasana;

  const dynamicData = [
    { name: "Costo rotación actual", value: Math.round(annualRotationCost), color: "#EF4444" },
    { name: "Costo Charlasana/año", value: Math.round(totalCharlasana), color: "#0091FF" },
    { name: "Ahorro estimado (−15%)", value: Math.round(savings), color: "#00CFA1" },
  ];

  return (
    <section id="roi" style={{
      background: "#07070E",
      padding: "100px 0",
    }}>
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
            background: "rgba(0,207,161,0.1)",
            border: "1px solid rgba(0,207,161,0.25)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#00CFA1", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em" }}>
              ROI EMPRESARIAL
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
            El análisis financiero que<br />le habla al CFO
          </h2>
          <p style={{
            color: "#8585A8",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Charlasana no compite por empatía. Compite por eficiencia sostenible.
            Este es el modelo financiero sin considerar ausentismo ni productividad.
          </p>
        </motion.div>

        {/* KPI cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 60,
        }}>
          {kpiCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(13,13,26,0.8)",
                border: "1px solid rgba(139,139,200,0.1)",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${card.color}15`,
                  border: `1px solid ${card.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <card.icon size={16} color={card.color} />
                </div>
                <span style={{ color: "#8585A8", fontSize: 13 }}>{card.label}</span>
              </div>
              <div style={{
                fontFamily: "monospace",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: card.color,
                marginBottom: 6,
              }}>
                {card.value}
              </div>
              <div style={{ fontSize: 12, color: "#6060A0" }}>{card.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(13,13,26,0.9)",
            border: "1px solid rgba(139,139,200,0.12)",
            borderRadius: 20,
            padding: "40px",
            marginBottom: 60,
          }}
        >
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, color: "#00CFA1", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 8 }}>
              CALCULADORA DE ROI INTERACTIVA
            </div>
            <h3 style={{ margin: 0, color: "#EEEEF5", fontSize: 22, fontWeight: 700 }}>
              Ajusta tu organización, ve el impacto
            </h3>
          </div>

          {/* Sliders */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <label style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ color: "#8585A8", fontSize: 14 }}>Número de empleados</span>
                <span style={{
                  fontFamily: "monospace",
                  color: "#00CFA1",
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                  {employees.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min={100}
                max={5000}
                step={100}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#00CFA1", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 11, color: "#4040A0" }}>100</span>
                <span style={{ fontSize: 11, color: "#4040A0" }}>5,000</span>
              </div>
            </div>
            <div>
              <label style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ color: "#8585A8", fontSize: 14 }}>Salario promedio anual (USD)</span>
                <span style={{
                  fontFamily: "monospace",
                  color: "#0091FF",
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                  ${salary.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min={15000}
                max={100000}
                step={5000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0091FF", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 11, color: "#4040A0" }}>$15K</span>
                <span style={{ fontSize: 11, color: "#4040A0" }}>$100K</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dynamicData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(139,139,200,0.08)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#8585A8", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#8585A8", fontSize: 11, fontFamily: "monospace" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={80}>
                  {dynamicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ROI summary */}
          <div style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            paddingTop: 24,
            borderTop: "1px solid rgba(139,139,200,0.08)",
          }}>
            {[
              {
                label: "Costo rotación actual",
                value: `USD ${(annualRotationCost / 1000).toFixed(0)}K`,
                color: "#EF4444",
              },
              {
                label: "Costo Charlasana/año",
                value: `USD ${(totalCharlasana / 1000).toFixed(0)}K`,
                color: "#0091FF",
              },
              {
                label: "Ahorro estimado (−15% rotación)",
                value: `USD ${(savings / 1000).toFixed(0)}K`,
                color: "#00CFA1",
              },
              {
                label: "ROI directo",
                value: `${roi.toFixed(1)}x`,
                color: "#F59E0B",
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "16px",
                borderRadius: 10,
                background: `${item.color}08`,
                border: `1px solid ${item.color}20`,
              }}>
                <div style={{ fontSize: 12, color: "#6060A0", marginBottom: 6 }}>{item.label}</div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 22,
                  fontWeight: 700,
                  color: item.color,
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 12, color: "#4040A0" }}>
            * Sin considerar impacto en productividad, ausentismo ni reducción de errores críticos. El ROI real es significativamente mayor.
          </p>
        </motion.div>

        {/* Impact metrics table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(13,13,26,0.8)",
            border: "1px solid rgba(139,139,200,0.1)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "28px 32px", borderBottom: "1px solid rgba(139,139,200,0.08)" }}>
            <div style={{ fontSize: 13, color: "#6366F1", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 4 }}>
              KPIs IMPACTADOS
            </div>
            <h3 style={{ margin: 0, color: "#EEEEF5", fontSize: 20, fontWeight: 700 }}>
              Métricas que ya existen en tu dashboard corporativo
            </h3>
          </div>
          <div>
            {impactMetrics.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: 24,
                  alignItems: "center",
                  padding: "16px 32px",
                  borderBottom: i < impactMetrics.length - 1 ? "1px solid rgba(139,139,200,0.06)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.color, flexShrink: 0 }} />
                  <span style={{ color: "#EEEEF5", fontSize: 15 }}>{m.metric}</span>
                </div>
                <span style={{
                  fontFamily: "monospace",
                  fontSize: 15,
                  fontWeight: 700,
                  color: m.color,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}>
                  {m.range}
                </span>
                <div style={{
                  padding: "3px 10px",
                  borderRadius: 100,
                  background: m.impact === "directo" ? "rgba(0,207,161,0.1)" : "rgba(139,139,200,0.08)",
                  border: `1px solid ${m.impact === "directo" ? "rgba(0,207,161,0.2)" : "rgba(139,139,200,0.12)"}`,
                }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: m.impact === "directo" ? "#00CFA1" : "#8585A8",
                    letterSpacing: "0.05em",
                  }}>
                    {m.impact.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
