import React from 'react'
import './style.css'
const data = [
    {
      title: "Categories",
      items: ["About us", "Testimonials", "Contact", "Journal", "Privacy Policy"],
    },
    {
      title: "Partners ",
      items: [
        "Support",
        "Shipping & Returns",
        "Size Guide ",
        " Product Care",
      ],
    },
    {
      title: "Contact us ",
      items: ["  26A Pagoda St, TANGS, Singapore, 058187", "+65 6221 5462"],
    },
  ];

export const FooterInformation = () => {
    const [...footerInfo] = data;

  return (
    <>
    {footerInfo.map((infoItem) => {
        return (
          <>
            <div className="items">
              <h1 className="footer-item-title">{infoItem.title}</h1>
              <div className="footer-items">
                {infoItem.items.map((item) => {
                  return (
                    <>
                      <p>{item}</p>
                    </>
                  );
                })}
                <hr className="hr-item"></hr>
              </div>
            </div>
          </>
        );
      })}</>
  )
}
export default FooterInformation