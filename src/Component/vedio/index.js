import "./styles.css"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const list = [
    {
      title: "Jamdani",
      imageSrc:"./images/635c0a53670aa9b611314996afb28e7cbfb6a4ec.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageSrc:"./images/2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageSrc: "./images/2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png",
    }];


export const Video = () => {
    const [...data]=list;
  return (
    <div  className="main_wrapper"> 
    <h1 className="h1">Recommended Videos</h1>
    <div className="wrapper">
        {data.map((item)=>{
            return(
                <div className="main_vedio">
                    <img className="image_vedio" src={item.imageSrc}></img>
                    <p className="label">{item.title}</p>
                </div>
                 )})}
    </div>
    <div className="anchore">
    <a className="show_more" href="#">SHOW MORE </a>
    </div>
 
    </div> )}

export default Video


