import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        <p><Link href="/meals">Meals</Link></p>
        <p><Link href="/meals/share">Share Meals</Link></p>
        <p><Link href="/meals/1">Meal with id 1</Link></p>
        <p><Link href="community">Community</Link></p>
      </h1>
    </main>
  );
}
