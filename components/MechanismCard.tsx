"use client"

import Link from "next/link"
import { useState } from "react"

export default function MechanismCard({ mechanism }: any) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/mechanisms/${mechanism.id}`} style={{ display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: "4px",
          padding: "40px 32px 32px",
          cursor: "pointer",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",

          /* Parchment background */
          background: hovered
            ? "#fff9f0"
            : "#fdf7ec",

          boxShadow: hovered
            ? "0 10px 36px rgba(140, 90, 20, 0.18), 0 3px 8px rgba(140, 90, 20, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
            : "0 2px 12px rgba(140, 90, 20, 0.1), 0 1px 3px rgba(140, 90, 20, 0.07), inset 0 1px 0 rgba(255,255,255,0.7)",

          border: "1px solid",
          borderColor: hovered ? "rgba(140, 90, 20, 0.38)" : "rgba(140, 90, 20, 0.2)",
        }}
      >
        {/* Top left corner mark */}
        <div style={{
          position: "absolute", top: "10px", left: "10px",
          width: "16px", height: "16px",
          borderTop: `1.5px solid ${hovered ? "var(--amber)" : "var(--parchment-deep)"}`,
          borderLeft: `1.5px solid ${hovered ? "var(--amber)" : "var(--parchment-deep)"}`,
          transition: "border-color 0.3s ease",
        }} />
        {/* Bottom right corner mark */}
        <div style={{
          position: "absolute", bottom: "10px", right: "10px",
          width: "16px", height: "16px",
          borderBottom: `1.5px solid ${hovered ? "var(--amber)" : "var(--parchment-deep)"}`,
          borderRight: `1.5px solid ${hovered ? "var(--amber)" : "var(--parchment-deep)"}`,
          transition: "border-color 0.3s ease",
        }} />

        {/* Iroh heading — the "wisdom tag" */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "18px",
          letterSpacing: "0.1em",
          fontWeight: "500",
          /*textTransform: "uppercase", */
          color: "var(--ink-soft)",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          /*gap: "8px",⛩*/
        }}>
          <span style={{ fontSize: "16px" }}></span>
          {mechanism.iroh_heading}
        </p>

        {/* Mechanism name */}
        <h2 style={{
          fontFamily: "var(--font-accent)",
          fontSize: "16px",
          fontStyle: "italic",
          fontWeight: "400",
          color: "var(--amber)",
          lineHeight: 1.4,
          marginBottom: "14px",
        }}>
          {mechanism.mechanism || mechanism.name}
        </h2>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: `linear-gradient(to right, var(--parchment-deep), transparent)`,
          marginBottom: "16px",
          opacity: 0.6,
        }} />

        {/* Iroh quote */}
        {/*mechanism.iroh_quote && (
          <p style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "13px",
            color: "var(--ink-soft)",
            lineHeight: 1.7,
            marginBottom: "20px",
            paddingLeft: "12px",
            borderLeft: "2px solid var(--amber)",
          }}>
            "{mechanism.iroh_quote}"
          </p>
        )*/}

        {/* Footer row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "var(--font-accent)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "var(--ink-faint)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}>
            <span style={{
              display: "inline-block",
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "var(--amber)",
            }} />
            {mechanism.insight_count} insights
          </span>

          <span style={{
            fontFamily: "var(--font-accent)",
            fontSize: "11px",
            color: hovered ? "var(--amber)" : "var(--ink-faint)",
            letterSpacing: "0.1em",
            transition: "color 0.25s ease",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}>
            Seek wisdom →
          </span>
        </div>

        {/* Hover amber glow overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(232, 160, 32, 0.08) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }} />
      </div>
    </Link>
  )
}
