import React from "react";
import  style from "./style.css";

export const Information = () => {
  const data = [
    {
      title: "ARTISAN EMPLOYMENT DAYS CREATED",
      infoItems: ["123456"],
    },
    {
      title: "COUNTRIES INVOLVED TO DATE",
      infoItems: ["India", "China", "Sri Lanka"],
    },
    {
      title: "#MATTERTRIBE",
      infoItems: ["12 designers", "12 Factories"],
    },
  ];
  const [...information] = data;
  return (
    <>
      {information.map((item) => {
        
        
        return (
          <div className="about-info">
            <p className="more-info-title">{item.title}</p>
            {item.infoItems.map((more)=>{
             return<><p className="more-info">{more}</p></>
            })}
            
          </div>
        );
      })}
    </>
  );
};

export default Information