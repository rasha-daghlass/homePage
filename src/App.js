import {Header} from "./Component/header/index"
import './App.css';
import NavScrollExample from "./Component/NavBar/index"
import SliderPicture from "./Component/sliderPicture/index"
import Footer from "./Component/footer/index"
import About from "./Component/About/index"
import Shop from "./Component/shop/index"
import Video from "./Component/vedio/index"
import Features from "./Component/Features/index"
import Seen from "./Component/SeenOn/index"
import Explore from "./Component/Explore/index"
import ProductList from "././views/ProductList"
import { Router } from "./router";
import Test from "./Component/test-api";
function App() {

  return (
    <div>
      {/* <Test/> */}
      <Router/>
    {/* <ProductList/> */}
    {/* <Header/>
    <NavScrollExample/>
    <SliderPicture/>
    <Features/>
    <About/>
    <Explore/>
    <Shop/>
    <Video/>
    <Seen/>
    <Footer/> */}
    </div>);
  }
export default App;