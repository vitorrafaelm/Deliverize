import React, {useContext, useState} from "react";
import { OrderContext } from '../../context/orderContext'; 
import Ingredients from '../Ingredients'; 
import Button from '../Button';
import AddIngredientsButton from '../Ingredients/addIngredients'; 

import "./style.css";

const Order: React.FC = () => {
  const [counterIngredients, setCounterIngredients] = useState(0); 

  const {
    nm_product, description, ingredients, 
    vl_discount, vl_price, url_image, addOrder
  } = useContext(OrderContext); 

  return (
    <div className="orderContainer">
      <div className="orderContainer__apresentation">
        <img
          className="orderContainer__image"
          src={url_image}
          alt="Oferta Picanha Cheddar Bacon"
        />

        <div className="orderContainer__details">
          <h1>{nm_product}</h1>
          <p>
            {description}
          </p>

          <div className="orderPrice">
            <span>R$ {vl_discount?.toString().replace('.', ',')}</span>
            <span>R$ {vl_price?.toString().replace('.', ',')}</span>
          </div>
        </div>
      </div>

      <div className="order">
          <div className="order__options--info">
            <p >Adicionar ingredientes</p>
            <p>Até 8 ingredientes</p>
          </div>

          <div>
            {ingredients && ingredients[0].itens.map(item => {
              return(
                <Ingredients nm_item={item.nm_item} vl_item={item.vl_item} />
              )
            })}
            
          </div>

          <div className="order_options-infoTalher">
            <p >Precisa de Talher?</p>
          </div>

          <div className="checkboxContainer">
            <div className="checkbox__item">
              <input id="sim" type="checkbox"/>
              <label htmlFor="sim">Sim</label>
            </div>

            <div className="checkbox__item">
              <input id="nao" type="checkbox"/>
              <label htmlFor="nao">Não</label>
            </div>
          </div>

          <div className="buttonContainer">
            <div>
              <AddIngredientsButton 
                counterValue={1} 
                width={140} 
                height={40}
                counter={counterIngredients} 
                setCounter={setCounterIngredients} 
              />
            </div>
            <div>
              <Button />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Order;
