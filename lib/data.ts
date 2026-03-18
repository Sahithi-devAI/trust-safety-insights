import data from "@/data/insights.json"

export function getMechanisms() {
  return data.mechanisms
}

export function getMechanismById(id: string) {
  return data.mechanisms.find(
    (m: any) => m.id === Number(id)
  )
}

export function getInsightsByMechanism(id: string) {
  return data.insights.filter(
    (i: any) => i.cluster_id === Number(id)
  )
}