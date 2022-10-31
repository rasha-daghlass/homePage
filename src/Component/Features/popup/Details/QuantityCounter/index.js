import React, { useState } from "react";
import style from "./style.module.css";
import { BsQuestionSquare } from 'react-icons/bs';


const CountSection = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.btnWrapper}>
          <button onClick={handleDecrement} className={style.btn}>
            -
          </button>
          <i className={style.btn2} style={{ backgroundColor: "white" }}>
            {counter}
          </i>
          <button onClick={handleIncrement} className={style.btn}>
            +
          </button>
        </div>

        <div className={style.add}>
        <button className={style.addcart}> ADD TO CART</button>

        </div>
       <BsQuestionSquare className={style.question}/>
        <div className={style.add2}>
          <button className={style.wishlist}> ADD TO WISHLIST</button>
        </div>
      </div>
    </>
  );
};

export default CountSection;

