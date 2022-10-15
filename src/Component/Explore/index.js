import "./styles.css"
import React from 'react'

const Explore_list=[
  
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Kérastase: A Collaboration",
    image_src:"./images/e2bc90982fb7e7249aa7e2b3a0dcb7947a202eee.png"
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Remarkable Resilience: Grace Kim",
    paragraph:"A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
    
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Jaclynn Seah",
    paragraph:"Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia. ",
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"How To Wear The Lounge Lunghi",
    image_src:"./images/7eeccc1183cfe27c1a9b800c0037999ba9921181.png"
  }
]

export const Explore = () => {
  const[...result]=Explore_list

  return (
    <div className="main_explore">
      <div className="explore_container">
      <h1 className="Explore_h1">
      Explore
      </h1>
      <div className="main_content">
        <div className="right_explore">
        <p className="name1">FIELDTESTED.JANUARY 19, 2017</p>
            <p className="title11">Connected Clothing: Raye Padit</p>
            <p className="paragraph11">As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </p>
            <img className="image_src11" src="./images/c7663a357d9244c46a1e6fa3c99a91133043df2c.png" alt="picture" />

        </div>
        <div className="left_explore">

        {result.map((item)=>{
          return(
            <div className="explore_total">
            <p className="name2">{item.name}</p>
            <p className="title2">{item.title2}</p>
            <p className="paragraph2">{item.paragraph}</p>
            <img className="image_src2" src={item.image_src}  />
            </div>
          )
        })}



      </div>
      </div>
      <div className="tab">
         <button className="show_more_icon" href="#">SEE THE JOURNAL </button>
      </div>


      </div>
        
    </div>
  )
}

export default Explore