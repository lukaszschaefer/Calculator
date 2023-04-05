import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/multiplication">Multiplication</Link>
      </div>
      <div className={styles.landing}>
        <Image
          src="/landing.png"
          alt="landing page"
          width={1100}
          height={838}
          className={styles.image}
        />
      </div>
    </>
  );
};

export default Home;
