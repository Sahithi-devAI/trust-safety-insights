import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "path"

const dbPath = path.join(process.cwd(), "database", "lenny_insights.db")

async function getDB() {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  })
}

export async function getMechanisms() {
  const db = await getDB()

  return db.all(`
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
}

export async function getInsightsByMechanism(id: string) {
  const db = await getDB()

  return db.all(
    `
      SELECT 
        good_insights.id,
        good_insights.insight,
        good_insights.evidence_quote,
        episodes.guest,
        episodes.title,
        episodes.youtube_url
      FROM good_insights
      JOIN episodes
      ON good_insights.episode_id = episodes.id
      WHERE cluster_id = ?
    `,
    id
  )
}

export async function getMechanismById(id: string) {
  const db = await getDB()

  return db.get(
    `
      SELECT *
      FROM mechanisms
      WHERE id = ?
    `,
    id
  )
}