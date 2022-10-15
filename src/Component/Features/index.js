import style from"./style.module.css";
import React from "react";

const featureItem = [
  {
    id: 1,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/8402c0f4f134ac3da6567d064219651be69fb559.png",
    price: "$599.0",
    new:true
    },
  {
    id: 2,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/88c6c728579097bb456b8880636063dd6d65bd1f.png",
    price: "$599.0",
    new:true,
  },
  {
    id: 3,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/57b25a954dd33a3587278bc87740a355f0c5bf8e.png",
 
    price: "$599.0",
    new:true,
  },
  {
    id: 4,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/87fe02beb67abf5c4fda69d148562a5b053f66a1.png",
    price: "$599.0",
    new:false
  },
  {
    id: 5,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/bce7a2a190a22802b2cf58aa91c42939b9bd5973.png",
    price: "$599.0",
    new:true
  },
  {
    id: 6,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/a18e6a7585aba0a670d755708b53fb0d50be1417.png",
    price: "$599.0",
    new:false
    
  },
  {
    id: 7,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/a2e693fe23793c9f533e32a42546e0a2a7cfbd03.png",
    price: "$599.0",
    new:true
  },
  {
    id: 8,
    title1: "Pueraria Mirifica And Study Phyto Estrogens",
    imgSrc:"./images/74eddefbf8804508dc61eaff6a9f65257fdf4fa9.png",
    price: "$599.0",
    new:false
  },
];

export const Features = () => {
  const [...list]= featureItem;
  
 
  
  return (
    <div  className={style.feature_wrap}>
    <h1 className={style.featured_h1}>Featured</h1>
    <div className={style.flex_box}>
      
        {list.map((item)=>{
          return(
            <div className={style.inner_flex}>
            <img className={style.item_picture} src={item.imgSrc} alt="picture" />
            {item.new  ? <p className="prop_new">NEW</p> : "" }
                
      
             
          
            <div className={style.middle}>
               <button className={style.image_hover}>QUICK VIEW</button>
            </div>
            <p className={style.title}>{item.title1}</p>
            <p className={style.price}>{item.price}</p>
            </div>

          )
        })}
    
      </div>
    
    </div>)};

export default Features;
