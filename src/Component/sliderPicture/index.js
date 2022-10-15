import "./style.css"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

export function SliderPicture() {
  return (
    <Carousel slide={false} indicators={false}>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/c97458358789c033061390d08b4fdcf4e98893b0.png"
          alt="First slide"/>

        <Carousel.Caption>
          <h2 className="sliderTitle">Perfume Tips Tricks</h2>
          <a className="sliderBttn" href="#">SHOP NOW</a>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/6106f340d7de0db6e432380b80f45bd5754e7265.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className="sliderTitle">Perfume Tips Tricks</h2>
          <a className="sliderBttn" href="#">SHOP NOW</a>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default SliderPicture;

