import { getMechanisms } from "@/lib/data"
import MechanismCard from "@/components/MechanismCard"

export default function Home() {
  const mechanisms = getMechanisms()

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
        <p style={{
          fontFamily: "var(--font-accent)",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--amber)",
          marginBottom: "20px",
          marginTop: "24px",
          animation: "fadeUp 0.6s ease both",
        }}>
          ✦ The Jasmine Dragon Archive ✦
        </p>

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
          Trust & Safety Signals
          <br />
          <span style={{ color: "var(--amber-glow)" }}>Hidden in Product Conversations</span>
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

        {/* Iroh quote */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "15px",
          color: "var(--ink-soft)",
          maxWidth: "540px",
          margin: "0 auto",
          lineHeight: 1.8,
          animation: "fadeUp 0.7s 0.3s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          "Wisdom is not found in grand proclamations, but in the quiet patterns<br />
          hidden within a thousand honest conversations."
        </p>

        <p style={{
          marginTop: "10px",
          fontSize: "12px",
          letterSpacing: "0.15em",
          color: "var(--ink-faint)",
          fontFamily: "var(--font-accent)",
          animation: "fadeUp 0.7s 0.35s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          — General Iroh, via Lenny's Podcast
        </p>
      </header>

      

      {/* ── Card Grid ── */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "28px",
      }}>
        {mechanisms
      .filter((m: any) => m && m.mechanism)
      .map((mechanism: any, i: number) => (
          <div
            key={mechanism.id}
            style={{
              animation: `fadeUp 0.6s ${0.45 + i * 0.07}s ease both`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <MechanismCard mechanism={mechanism} />
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <footer style={{
        textAlign: "center",
        marginTop: "80px",
        padding: "32px",
        borderTop: "1px solid rgba(100, 70, 30, 0.15)",
      }}>
        <p style={{
          fontFamily: "var(--font-accent)",
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: "var(--ink-faint)",
        }}>
          ✦ &nbsp; May your products know safety as fire knows warmth &nbsp; ✦
        </p>
      </footer>

    </main>
  )
}
