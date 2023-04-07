import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Navbar from "@/01_components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.landing}>
        <Image
          src="/landing.png"
          alt="landing page"
          width={1100}
          height={838}
          className={styles.image}
        />
      </main>
    </>
  );
};

export default Home;
