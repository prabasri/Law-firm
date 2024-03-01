import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner"
import Introduction from "./components/Introduction/Introduction";
import SuccessRate from "./components/SuccessRate/SuccessRate";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div style={{backgroundColor: "#1d1d1d", color: "#FFFFFF"}}>
        <Introduction/>
        <SuccessRate/>
      </div>
    </div>
  )
}