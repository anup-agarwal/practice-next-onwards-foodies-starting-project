import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import Loading from '@/components/loader/loading-out';

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}


export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span>by you</span></h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}