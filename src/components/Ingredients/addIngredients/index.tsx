import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import './style.css';

interface addIngredientsProsp {
  width: number;
  height?: number;
  counterValue?: number;
  counter: number; 
  setCounter: (number: number) => void; 
}

const AddIngredients: React.FC<addIngredientsProsp> = ({
  counterValue,
  width,
  height,
  counter, 
  setCounter
}) => {

  const style = {
    width: width,
    height: height,
    border: "none",
    justifyContent: "flex-end",
  };

  useEffect(() => {
    if (counterValue) {
      setCounter(counterValue);
    }
  }, []);

  return (
    <>
      {counter !== 0 ? (
        <div
          className="buttons__container"
          style={{ width: width, height: height }}
        >
          <button onClick={() => setCounter(counter - 1)}>
            <FaMinus />
          </button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>
            <FaPlus />
          </button>
        </div>
      ) : (
        <div className="buttons__container" style={style}>
          <button onClick={() => setCounter(counter + 1)}>
            <FaPlus />
          </button>
        </div>
      )}
    </>
  );
};

export default AddIngredients;
