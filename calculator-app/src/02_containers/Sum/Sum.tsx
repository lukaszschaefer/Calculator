//const inter = Inter({ subsets: ["latin"] });
import React from "react";
import Navbar from "@/01_components/Navbar/Navbar";
import SumComponent from "@/01_components/SumComponent/SumComponent";

const Sum: React.FC = () => {
  return (
    <>
      <Navbar />
      <SumComponent />
    </>
  );
};

export default Sum;
