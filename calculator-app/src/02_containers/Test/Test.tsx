//const inter = Inter({ subsets: ["latin"] });
import React from "react";
import Navbar from "@/01_components/Navbar/Navbar";
import TestComponent from "@/01_components/TestComponent/TestComponent";

const Test: React.FC = () => {
  return (
    <>
      <Navbar />
      <TestComponent />
    </>
  );
};

export default Test;
