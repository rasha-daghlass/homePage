import React from "react";
import "./styles.css";
import {Information} from "./details/index"
export const About = () => {
  return (
    <div className="main">
      <h1 className="about_h1">About Matter</h1>
      <div className="about_wrapper">
        <div className="border1">
          <img className="photo" src="./images/fc26b70da783a49001cf63c38ed1ad5c5044b323.png" alt="" />
        </div>
        <div className="right_side">
          <p>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities
          </p>

          <Information/>

        </div>
      </div>
    </div>
  );
};

export default About;