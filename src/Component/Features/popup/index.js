import React from 'react'
import Modal from 'react-modal'
import Image from "./image"
import style from './style.module.css'
import Details from "./Details"


export const PopUp = ({modalIsOpen , updatePopUp}) => {
  return (
    <Modal isOpen={modalIsOpen}  
               style={
                {overlay:{
                  backgroundColor:'grey'
                },
                content:{
                  color:'#030303'
                }
              }
              }>
                <div className={style.wrapper}>
                    <div className={style.title}>
                        <h5>The Sideswept Dhoti</h5>
                        <i class="fal fa-times fa-2x" onClick={updatePopUp}> </i>
                    </div>
                </div>
                <div className={style.main}>
                    <div className={style.left}>
                        <Image/>
                    <div className={style.imgright}>
                        <img src="./images/ca429081169db5164e3ba000450d2d87d05b95d6.png" alt="" />

                    </div>

                    </div>
                    <div className={style.right}>
                      <div className={style.container}>
                      <h5>title +price + rating</h5>
                      <hr />
                     
                        <div className={style.details}>
                           <Details/> 
                        </div>
                      </div>
                    </div>

                </div>
               </Modal>)
}

export default PopUp