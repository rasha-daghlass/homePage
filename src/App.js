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


function App() {
  return (
    <>
    <Header/>
    <NavScrollExample/>
    <SliderPicture/>
    <Features/>
    <About/>
    <Explore/>
    <Shop/>
    <Video/>
    <Seen/>
    <Footer/>
    </>
    
  );
}

export default App;