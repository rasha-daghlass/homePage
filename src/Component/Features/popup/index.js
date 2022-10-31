import React, { useState } from "react";
import Modal from "react-modal";
import Image from "./image";
import style from "./style.module.css";
import Details from "./Details";
import data from "../data.json";

export const PopUp = ({ modalIsOpen, updatePopUp ,product}) => {
  const {title,price,images,thumbnail,rating}=product
  const [rightImage, setRightImage]=useState({thumbnail})
  
  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: "grey",
        },
        content: {
          color: "#030303",
        },
      }}
    >
      <div className={style.wrapper}>
        <div className={style.title}>
          <h5>{title}</h5>
          <button class="fal fa-times fa-2x"  onClick={updatePopUp}>
            {" "}
          </button>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.left}>
          <Image images={images} thumbnail={thumbnail}  />
        </div>
        <div className={style.right}>
          <div className={style.container}>
            <h5 className={style.title}>{title} </h5>
            <div className={style.heading}>
              <h5 className={style.price}>{price}.00$ </h5>
              <div className={style.theWrapper}>
              <div className={rating} >
                <a className={style.checked} href="#5 ">★</a>
                <a className={style.checked} href="#4">★</a>
                <a className={style.checked} href="#3">★</a>
                <a className={style.checked} href="#2">★</a>
                <a className={style.checked} href="#1">★</a>
                
                </div>
              <h5 className={style.rating}> {rating} of 5</h5>
              </div>
              
            </div>
            <hr />

            <div className={style.details}>
              <Details product={product} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
