import "./App.css";
import Produce from "./Components/Produce";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import TopNavbar from "./Components/TopNavBar/TopNavbar";
import data from "./Components/Data/Data";
import Preparedfoods from "./Components/Preparedfoods";
import CannedfoodsandSoups from "./Components/CannedfoodsandSoups";
import Bakery from "./Components/Bakery";
import DiaryAndEggs from "./Components/DiaryAndEggs";
import Frozen from "./Components/Frozen";
import MeatAndSeafood from "./Components/MeatAndSeafood";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  window.onscroll = function () {
    setScroll(window.pageYOffset);
    // console.log(window.pageYOffset);
  };
  const { productItems } = data;
  return (
    <div>
      <TopNavbar />
      <SideNavBar scroll={scroll} />
      <Produce productItems={productItems} />
      <Preparedfoods productItems={productItems} />
      <CannedfoodsandSoups productItems={productItems} />
      <Bakery productItems={productItems} />
      <DiaryAndEggs productItems={productItems} />
      <Frozen productItems={productItems} />
      <MeatAndSeafood productItems={productItems} />
    </div>
  );
}

export default App;
