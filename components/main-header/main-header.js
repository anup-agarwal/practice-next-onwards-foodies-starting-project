import Link from "next/link";
import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";


const MainHeader = () => {
  return <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={Logo} alt="" priority />
        Next Level food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">meals</Link>
            <Link href="/community">community</Link>

          </li>
        </ul>
      </nav>
    </header>
  </>
}

export default MainHeader;