import React, { useCallback, useEffect, useState } from "react";
import product_card from "../components/data/product_data";
import { totalCount } from "../components/totalCount";


const Punches = () => {
    const [milkCount, setMilkCount] = useState(totalCount["Condense milk"]);
    const [bottleCount, setBottleCount] = useState(totalCount ["Bottle"])
    const [pineappleCount, setPineappleCount] = useState(totalCount["Pineapple"]);
    const [nurishmentCount, setNurishmentCount] = useState(totalCount["Nurishment"]);
    const [agaveCount, setAgaveCount] = useState(totalCount["Agave"]);
    const [oatCount, setOatCount] = useState(totalCount["Oat Milk"]);
    const [guinnessCount, setGuinnessCount] = useState(totalCount["Guinness"]);
    const [carrotCount, setCarrotCount] = useState(totalCount["Carrot"]);
    const [seamossCount, setSeamossCount] = useState(totalCount["Seamoss"]);
    const [veganCount, setVeganCount] = useState(totalCount[" V Condense milk"]);
    const [boatCount, setBoatCount] = useState(totalCount["B Oat Milk"]);
    const [cocoCount, setCocoCount] = useState(totalCount["Coco Cream"]);
    const [vpumpkinCount, setvpumpkinCount] = useState(totalCount["Pumpkin"]);
    //console.log(guinnessCount);

   //pineapple punch ingredients
    let pineappleMilk = product_card[0].ingredients["Condense milk"];
    let pineapplePineapple = product_card[0].ingredients["Pineapple"];
    let pineappleNurishment = product_card[0].ingredients["Nurishment"];
    let pineappleAgave = product_card[0].ingredients["Agave"];
    let pineappleOat = product_card[0].ingredients["Oat Milk"];
    let pineappleBottle = product_card[0].ingredients["Bottle"];

    //Pineapple Function
    const decreasePineappleTotal = () => {
     
      setMilkCount(milkCount - pineappleMilk);
      setPineappleCount(pineappleCount-pineapplePineapple);
      setNurishmentCount(nurishmentCount-pineappleNurishment);
      setAgaveCount(agaveCount-pineappleAgave);
      setOatCount(oatCount-pineappleOat);
      setBottleCount(bottleCount - pineappleBottle);
      
  }

   //Guinness punch ingredients
    let guinnessMilk = product_card[1].ingredients["Condense milk"];
    let guinnessGuinness = product_card[1].ingredients["Guinness"];
    let guinnessNurishment = product_card[1].ingredients["Nurishment"];
    let guinnessBottle = product_card[1].ingredients["Bottle"];
   
   
   // function
  //console.log("guinness stock count:" + guinnessMilk, guinnessGuinness, guinnessNurishment);
  const decreaseGuinnessTotal = () => {

      setMilkCount(milkCount-guinnessMilk);
      setGuinnessCount(guinnessCount-guinnessGuinness);
      setNurishmentCount(nurishmentCount-guinnessNurishment);
      setBottleCount(bottleCount-guinnessBottle);
    
  }
   
   //Carrot Punch ingredients
   let carrotMilk = product_card[2].ingredients["Condense milk"];
   let carrotCarrot = product_card[2].ingredients["Carrot"];
   let carrotNurishment = product_card[2].ingredients["Nurishment"];
   let carrotBottle = product_card[2].ingredients["Bottle"];

   //function
  const decreaseCarrotTotal = () => {
      
      setMilkCount(milkCount-carrotMilk);
      setCarrotCount(carrotCount-carrotCarrot);
      setNurishmentCount(nurishmentCount-carrotNurishment);
      setBottleCount(bottleCount-carrotBottle);
  }  

  //Seamoss Punch ingredients
   let seamossSeamoss = product_card[3].ingredients["Seamoss"];
   let seamossCondense = product_card[3].ingredients["V Condense Milk"];
   let seamossBoatMilk = product_card[3].ingredients["Oat Milk"];
   let seamossCocoCream = product_card[3].ingredients["Coco Cream"];
   let seamossBottle = product_card[3].ingredients["Bottle"];

   //function
   const decreaseSeamossTotal = () => {

      setSeamossCount(seamossCount-seamossSeamoss);
      setVeganCount(veganCount-seamossCondense);
      setBoatCount(boatCount-seamossBoatMilk);
      setCocoCount(cocoCount-seamossCocoCream);
      setBottleCount(bottleCount-seamossBottle);
  }
    
   //vegan Pumpkin Punch ingredients 
   let vpumpkinMilk = product_card[4].ingredients["V Condense Milk"];
   let vpumpkinpumpkin = product_card[4].ingredients["Pumpkin"];
   let vpumpkinGuinness  = product_card[4].ingredients["Guinness"];
   let vpumpkinBoatMilk =  product_card[4].ingredients["B Oat Milk"];
   let vpumpkincococream = product_card[4].ingredients["Coco Cream"];
   let vpumpkinAgave = product_card[4].ingredients["Agave"];
   let vpumpkinBottle = product_card[4].ingredients["Bottle"];

   // Vegan Pumpkin Function

   const decreasevPumpkinTotal = () => {
      
      setVeganCount(veganCount-vpumpkinMilk);
      setvpumpkinCount(vpumpkinCount-vpumpkinpumpkin);
      setGuinnessCount(guinnessCount-vpumpkinGuinness);
      setBoatCount(boatCount-vpumpkinBoatMilk);
      setCocoCount(cocoCount-vpumpkincococream);
      setAgaveCount(agaveCount-vpumpkinAgave);
      setBottleCount(bottleCount-vpumpkinBottle);
   }

  //Vegan Guinness Punch ingredients

   let vguinnessGuinness = product_card[4].ingredients["Guinness"];
   let vguinnessBoatMilk =  product_card[4].ingredients["B Oat Milk"];
   let vguinnesscococream = product_card[4].ingredients["Coco Cream"];
   let vguinnessAgave = product_card[4].ingredients["Agave"];
   let vguinnessBottle = product_card[4].ingredients["Bottle"];

   //Vegan Guinness Function 

   const decreasevGuinnessTotal = () => {
      

      setGuinnessCount(guinnessCount-vguinnessGuinness);
      setBoatCount(boatCount-vguinnessBoatMilk);
      setCocoCount(cocoCount-vguinnesscococream);
      setAgaveCount(agaveCount-vguinnessAgave);
      setBottleCount(bottleCount-vguinnessBottle);



  }  
   //console.log("carrot stock count:" + milkCount,pineappleCount,agaveCount,nurishmentCount,oatCount);

  
    //console.log(guinnessGuinness);
  //console.log(product_card);
    
    
    


   // Button click function

    const buttonClick = (id) =>{
      if(id===0)
      {decreasePineappleTotal()}
      else if(id===1)
      {decreaseGuinnessTotal()}
      else if(id===2)
      {decreaseCarrotTotal()}
      else if(id===3)
      {decreaseSeamossTotal()}
      else  (id===4)
      {decreasePumpkinTotal()}
    }

    useEffect( () =>{
      buttonClick();
    },[buttonClick])
    console.log(milkCount,guinnessCount,nurishmentCount);

    //console.log("pineapple stock count:" + pineappleMilk,pineappleAgave,pineappleNurishment,pineappleOat);
  

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
        <div onClick={buttonClick()}className="btn">Add to cart</div>
      </div>
    </div>
  // if id ===0 run decrease pineapple function, if id === 1 run gin function, if id=== 2 run carrot function
  )); 
  
  return (
    <div className="main_content">
      <h3>Punches</h3>
      {listItems}
    </div>
  );
};

export default Punches;
