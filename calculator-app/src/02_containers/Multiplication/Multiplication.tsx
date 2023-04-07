//const inter = Inter({ subsets: ["latin"] });
import React from "react";
import MultiplicationComponent from "@/01_components/MultiplicationComponent/MultiplicationComponent";
import Navbar from "@/01_components/Navbar/Navbar";

const Multiplication: React.FC = () => {
  return (
    <>
      <Navbar />
      <MultiplicationComponent />
    </>
  );
};

export default Multiplication;
