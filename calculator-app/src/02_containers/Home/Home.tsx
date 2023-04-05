import React from "react";
import Link from "next/link";
import router from "next/router";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>
        Jump to
        <Link href="/multiplication"> Multiplication</Link>
      </h2>
    </>
  );
}
//src/02_containers/Multiplication/Multiplication.tsx
