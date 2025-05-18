import Link from "next/link";
import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


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
            <NavLink href="/meals">meals</NavLink>
            <NavLink href="/community">community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
}

export default MainHeader;