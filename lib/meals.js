import sql from "better-sqlite3";

const db = sql("meals.db")

export async function getMeals() {
  await new Promise(res => setTimeout(() => {
    res()
  }, 2000))
  return db.prepare("Select * from meals").all()
}

export function getMealbyId(slug) {
  return db.prepare(`Select * from meals where slug = ?`).get(slug)
}