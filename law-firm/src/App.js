import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner"
import Introduction from "./components/Introduction/Introduction";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div style={{backgroundColor: "#1d1d1d"}}>
        <Introduction/>
      </div>
    </div>
  )
}