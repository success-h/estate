/** @format */
import { useState } from "react";
import { GlobalStyle } from "./components/global-style";
import Hero from "./components/hero";
import InfoSection from "./components/info-section";
import Navbar from "./components/navbar";
import Sidebar from "./components/side-bar";
import { InfoData, InfoDataTwo } from "./data/info-data";
import { SliderData } from "./data/slider-data";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} {...InfoDataTwo} />
    </>
  );
}

export default App;
