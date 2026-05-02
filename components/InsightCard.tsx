"use client"

import { useState } from "react"

export default function InsightCard({ insight }: any) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "4px",
        padding: "28px 24px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        background: hovered ? "#fff9f0" : "#fdf7ec",
        boxShadow: hovered
          ? "0 10px 32px rgba(140, 90, 20, 0.16), 0 3px 8px rgba(140, 90, 20, 0.09)"
          : "0 2px 14px rgba(140, 90, 20, 0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
        border: "1px solid",
        borderColor: hovered ? "rgba(140, 90, 20, 0.38)" : "rgba(140, 90, 20, 0.2)",
      }}
    >
      {/* Corner marks */}
      <div style={{ position: "absolute", top: "10px", left: "10px", width: "12px", height: "12px",
        borderTop: "1px solid var(--amber)", borderLeft: "1px solid var(--amber)", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "12px", height: "12px",
        borderBottom: "1px solid var(--amber)", borderRight: "1px solid var(--amber)", opacity: 0.5 }} />

      {/* Insight */}
      <h3 style={{
        fontFamily: "var(--font-body)",
        fontSize: "18px",
        fontWeight: "500",
        color: "var(--ink)",
        lineHeight: 1.55,
        marginBottom: "16px",
      }}>
        {insight.insight}
      </h3>

      {/* Evidence quote background: "rgba(184, 114, 8, 0.05)",*/}
      {insight.evidence_quote && (
        <blockquote style={{
          margin: "0 0 18px",
          padding: "12px 14px",
          borderLeft: "2px solid var(--amber)",
          background: "rgba(44,31,14,0.04)",
          
          borderRadius: "0 3px 3px 0",
        }}>
          <span style={{
            display: "block",
            fontFamily: "Georgia, serif",
            fontSize: "28px",
            lineHeight: "0.5",
            color: "var(--amber)",
            marginBottom: 0,
            opacity: 0.8,
          }}>"</span>
          <p style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "15px",
            color: "var(--ink-soft)",
            lineHeight: 1.75,
            margin: "2px",
          }}>
            {insight.evidence_quote}
          </p>
        
      {/* Episode title as clickable CTA */}
      <a
        href={insight.start_seconds != null ? `${insight.youtube_url}&t=${insight.start_seconds}s` : insight.youtube_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          textDecoration: "none",
          group: "true",
        } as any}
      >
        {/* Play icon */}
        <span style={{
          marginTop: "2px",
          flexShrink: 0,
          width: "22px", height: "22px",
          borderRadius: "50%",
          border: "1px solid var(--ember)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="8" height="8" viewBox="0 0 10 10" fill="var(--ember)">
            <polygon points="2,1 9,5 2,9" />
          </svg>
        </span>

        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "var(--ember)",
          lineHeight: 1.5,
          border: "2px solid transparent",
          transition: "border-color 0.2s",
          ...(hovered ? { borderBottomColor: "var(--ember)" } : {}),
        }}>
          {insight.title}
        </span>
      </a>
      </blockquote>
      )}

      {/* Hover glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 0%, rgba(232,160,32,0.06) 0%, transparent 65%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
    </div>
  )
}
