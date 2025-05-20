import Image from "next/image";
import classes from "./page.module.css";
import { getMealbyId } from "@/lib/meals";
import { notFound } from "next/navigation";

const MealsSlugPage = async ({ params }) => {
  const meal = getMealbyId(params.slug)

  if (!meal) {
    notFound()
  }

  const { title, image, summary, instructions, creator, creator_email } = meal

  return <>
    <header className={classes.header}>
      <div className={classes["image"]}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={classes["headerText"]}>
        <h1>{title}</h1>
        <p className={classes["creator"]}>
          by <a href={`mailto:${creator_email}`}>{creator}</a>
        </p>
        <p className={classes["summary"]}>{summary}</p>
      </div>
    </header>
    <main>
      <p className={classes["instructions"]} dangerouslySetInnerHTML={{ __html: instructions.replace(/\n/g, "<br/>") }}></p>
    </main>
  </>
}

export default MealsSlugPage;