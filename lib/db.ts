import Database from "better-sqlite3"
import path from "path"

const dbPath = path.join(process.cwd(), "database", "lenny_insights.db")

const db = new Database(dbPath)

export function getMechanisms() {
  return db
    .prepare(`
      SELECT
        mechanisms.id,
        mechanisms.mechanism,
        mechanisms.iroh_heading,
        mechanisms.iroh_quote,
        COUNT(good_insights.id) AS insight_count
      FROM mechanisms
      LEFT JOIN good_insights
      ON good_insights.cluster_id = mechanisms.id
      GROUP BY mechanisms.id
    `)
    .all()
}

export function getInsightsByMechanism(id: string) {
  return db
    .prepare(`
      SELECT good_insights.id, good_insights.insight, good_insights.evidence_quote, episodes.guest, episodes.title,episodes.youtube_url
      FROM good_insights
      JOIN episodes
      ON good_insights.episode_id = episodes.id
      WHERE cluster_id = ?
    `)
    .all(id)
}

export function getMechanismById(id: string) {
    return db
      .prepare(`
        SELECT *
        FROM mechanisms
        WHERE id = ?
      `)
      .get(id)
  }