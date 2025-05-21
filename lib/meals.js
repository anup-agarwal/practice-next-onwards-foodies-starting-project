import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

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

export async function saveMeal(meal) {
  const newMeal = { ...meal }
  const { title, instructions, image } = meal;
  newMeal.slug = slugify(title)
  newMeal.sanitisedInstructions = xss(instructions)
  const extension = image.name.split(".").pop()
  const filename = `${newMeal.slug}.${extension}`
  const stream = fs.createWriteStream("public/images/" + filename);
  const bufferedImage = await image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save an image")
    }
  })
  newMeal.image = "/images/" + filename;
  console.log(newMeal);

  return db.prepare(`
    Insert into meals 
      (title,summary,instructions,creator, creator_email, image, slug)
    Values (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(newMeal)
}

