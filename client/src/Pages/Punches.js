import React, { useEffect, useState } from "react";
import product_card from "../components/data/product_data";
import { totalCount } from "../components/totalCount";


const Punches = () => {
    const [milkCount, setMilkCount] = useState(totalCount["Condense milk"]);
    
    let pineappleMilk = product_card[0].ingredients["Condense milk"];
    //console.log(milkCount);

    const decreaseTotal = () => {
        setMilkCount(milkCount - pineappleMilk);
       
    }
    useEffect( () =>{
        console.log(milkCount)
    },[milkCount]) 

  console.log(product_card);
  
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt= {item.product_name} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.currency}
          <span>{item.price}</span>
        </p>
        <div onClick={() => decreaseTotal()} className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      <h3>Punches</h3>
      {listItems}
    </div>
  );
};
export default Punches;
