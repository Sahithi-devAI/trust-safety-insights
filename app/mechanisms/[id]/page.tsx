
import { getInsightsByMechanism, getMechanismById } from "@/lib/data"
import InsightCard from "@/components/InsightCard"
import Link from "next/link"

export default function MechanismPage({ params }: any) {

  const mechanism =  getMechanismById(params.id)
  const insights =  getInsightsByMechanism(params.id)

  return (
    <main style={{ minHeight: "100vh", padding: "0 0 80px" }}>
    
  {/* ── Hero Header ── */}
  <header style={{
        textAlign: "center",
        padding: "52px 40px 40px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #efe5cc, var(--parchment))",
      }}>

        {/* Decorative top lantern line */}
        <div style={{
          position: "absolute",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "48px",
          background: "linear-gradient(to bottom, transparent, var(--amber))",
        }} />

        {/* Lantern dot */}
        <div style={{
          position: "absolute",
          top: "44px", left: "50%",
          transform: "translateX(-50%)",
          width: "10px", height: "10px",
          borderRadius: "50%",
          background: "var(--amber-glow)",
          boxShadow: "0 0 16px 6px rgba(232, 160, 32, 0.35)",
          animation: "flickerIn 1.2s ease both",
        }} />

        {/* Chinese-style corner ornaments */}
        <div style={{
          position: "absolute", top: "20px", left: "32px",
          width: "40px", height: "40px",
          borderTop: "2px solid var(--amber)",
          borderLeft: "2px solid var(--amber)",
          opacity: 0.5,
        }} />
        <div style={{
          position: "absolute", top: "20px", right: "32px",
          width: "40px", height: "40px",
          borderTop: "2px solid var(--amber)",
          borderRight: "2px solid var(--amber)",
          opacity: 0.5,
        }} />

        {/* Eyebrow */}
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-accent)",
          fontSize: "15px",
          letterSpacing: "0.22em",
          color: "var(--amber)",
          margin: "28px auto",
          textDecoration: "none",
        }}>
          ← Back to Archive
        </Link>

        {/* Main Title */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(22px, 4vw, 42px)",
          fontWeight: "700",
          color: "var(--ink)",
          lineHeight: 1.25,
          letterSpacing: "0.02em",
          animation: "fadeUp 0.7s 0.1s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          {mechanism.iroh_heading}
          <br />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 32px)",color: "var(--amber-glow)" }}>{mechanism.mechanism}</span>
        </h1>

        {/* Ink divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          margin: "28px auto",
          maxWidth: "400px",
          animation: "fadeUp 0.7s 0.2s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--parchment-deep))" }} />
          <span style={{ color: "var(--parchment-deep)", fontSize: "18px" }}>☯</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--parchment-deep))" }} />
        </div>

       
{/* Insight count badge */}
        <div style={{ marginTop: "20px" }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px",
            border: "1px solid var(--card-border-strong)",
            borderRadius: "999px",
            fontFamily: "var(--font-accent)",
            fontSize: "15px",
            letterSpacing: "0.18em",
            color: "var(--ink-faint)",
            background: "rgba(184,114,8,0.07)",
          }}>
            {insights.length} insights within this path
          </span>
        </div>

      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          maxWidth: "1200px",
          margin: "0 auto",
        padding: "0 40px",
        animation: "fadeUp 0.7s 0.4s ease both",
        opacity: 0,
        animationFillMode: "forwards",
        }}
      >
        {insights.map((insight: any) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>

    </main>
  )
}