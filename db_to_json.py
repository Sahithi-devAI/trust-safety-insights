import json
import os

db_path = os.path.join("database", "lenny_insights.db")

# conn = sqlite3.connect(db_path)
# conn.row_factory = sqlite3.Row
cursor = conn.cursor()

mechanisms = cursor.execute("""
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
""").fetchall()

insights = cursor.execute("""
SELECT
    good_insights.cluster_id,
    good_insights.insight,
    good_insights.evidence_quote,
    episodes.guest,
    episodes.title,
    episodes.youtube_url
FROM good_insights
JOIN episodes
ON good_insights.episode_id = episodes.id
""").fetchall()

data = {
    "mechanisms": [dict(row) for row in mechanisms],
    "insights": [dict(row) for row in insights]
}

with open("data/insights.json", "w") as f:
    json.dump(data, f, indent=2)

print("JSON export complete")
