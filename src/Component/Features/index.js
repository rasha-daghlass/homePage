import style from"./style.module.css";
import React ,{useState} from "react";
import Modal from 'react-modal'
import data from "./data.json"
import PopUp from "./popup";




export const Features = () => {
  const [...list]= data;
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const updatePopUp=()=>{
    setModalIsOpen(false)
  }

  return (
    <div  className={style.feature_wrap}>
    <h1 className={style.featured_h1}>Featured</h1>
    <div className={style.flex_box}>
      
        {list.map((item)=>{
          return(
            <div className={style.inner_flex}>
            <img className={style.item_picture} src={item.images[0]} alt="picture" />
            {item.new  ? <p className="prop_new">NEW</p> : "" }
            <div className={style.middle}>
               <button className={style.image_hover} onClick={()=>{setModalIsOpen(true)}}>QUICK VIEW</button>
               <PopUp modalIsOpen={modalIsOpen} updatePopUp={updatePopUp} />
               
            </div>
            <p className={style.title}>{item.title}</p>
            <p className={style.price}>{item.price}.00$</p>
            </div>

          )
        })}
    
      </div>
    
    </div>)};

export default Features;