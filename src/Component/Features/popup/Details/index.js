import React from 'react'
import style from "./style.module.css"
import QuantityCounter from "./QuantityCounter"


const Details = () => {
  return (
    <>
    <div className={style.main}>
        <h5 className={style.title} >Description</h5>
        <p className={style.description}> rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass rasha khaled daghlass</p>
        <hr/>
        <div className={style.row}>
        <h6 className={style.header}>Artisan Employment</h6>
        <p className={style.paragraph}>hoo </p>
        </div>
        <div className={style.row}>
        <h6 className={style.header}>Partnership</h6>
        <p className={style.paragraph}>hoo </p>
        </div>
        <div className={style.row}>
        <h6 className={style.header}>In Collab</h6>
        <p className={style.paragraph}>hoo </p>
        </div>

        <div className={style.quantity}>
          <h6 className={style.quantity2}>QUANTITY</h6>
          <QuantityCounter/>
        </div>
        
        
        
    </div>
    </>
    
  )
}

export default Details