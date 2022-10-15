import "./style.css"
import React from 'react'

const Name=[
    {
        title:"Pants",
        imgSrc:"./images/c3d74b651e3f521439ae7e68750fa01c13171c98.png"
    },
    {
        title:"Jumpsuits",
        imgSrc:"./images/ac22cf3d613f85df2f2d5fbe238567718c47fa96.png"
    },
    {
        title:"Tops",
        imgSrc:"./images/ee642707bfa9abb265f97fb49aeca2886b3db030.png"
    },
    {
        title:"Accessories",
        imgSrc:"./images/2362345cd93c41ef9634d80b90866ae9394758d9.png"
    }
]

export const  Shop= () => {
    const[...data]=Name

    return(
        <div className="main">
        <h1 className="h11">Shop</h1>
        <div className="container">
        {data.map((item)=>{
        return(
        <div className="intern">
        <img className="image_shop" src={item.imgSrc}></img>
        <div className="middle">
               <button className="image_hover">SHOP NOW</button>
            </div>
        <p className="text" >{item.title}</p>
        </div>)
       
    
    })}
    </div>
        </div>

       
    )

}

export default Shop
