import React, { useState } from "react";
import AddIngredientsButton from './addIngredients'; 
import "./style.css";

interface IngredientsProps{
  nm_item: string;
  vl_item: number; 
  counterValue?: number; 
}

const Ingredients: React.FC<IngredientsProps>  = ({counterValue, nm_item, vl_item}) => {
  const [counterIngredients, setCounterIngredients] = useState(0); 

  let valor = (counterIngredients * vl_item).toFixed(2).toString().replace('.', ','); 

  return (
    <div className="ingredients__container">
      <p>{nm_item}</p>
      <div className="container__buttons">
        <AddIngredientsButton 
          counter={counterIngredients} 
          setCounter={setCounterIngredients} 
          counterValue={counterValue} width={89}
        />
      </div>
      
      <p>+{valor}</p>
    </div>
  );
};

export default Ingredients;
