//const inter = Inter({ subsets: ["latin"] });
import React from "react";
import DivisionComponent from "@/01_components/DivisionComponent/DivisionComponent";
import Navbar from "@/01_components/Navbar/Navbar";

const Division: React.FC = () => {
  return (
    <>
      <Navbar />
      <DivisionComponent />
    </>
  );
};

export default Division;
