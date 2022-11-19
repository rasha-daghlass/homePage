import React from 'react'
import SliderPicture from '../Component/sliderPicture'
import Features from '../Component/Features'
import About from '../Component/About'
import Explore from '../Component/Explore'
import Shop from '../Component/shop'
import Video from '../Component/vedio'
import Seen from '../Component/SeenOn'
import Footer from '../Component/footer'


const Home = () => {
  return (
    <div>
    <SliderPicture/>
    <Features/>
    <About/>
    <Explore/>
    <Shop/>
    <Video/>
    <Seen/>
    </div>
  )
}

export default Home