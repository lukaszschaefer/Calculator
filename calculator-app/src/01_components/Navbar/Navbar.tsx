import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/sum">Sum</Link>
        <Link href="/subtraction">Subtraction</Link>
        <Link href="/multiplication">Multiplication</Link>
        <Link href="/division">Division</Link>
        <Link href="/test">Test</Link>
      </nav>
    </>
  );
};

export default Navbar;
