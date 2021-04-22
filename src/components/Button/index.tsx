import React, { useContext } from 'react'; 
import { OrderContext } from '../../context/orderContext'; 

import './style.css'; 

const Button: React.FC = () => {
    const { addOrder } = useContext(OrderContext); 

    return(
        <>
            <button onClick={() => addOrder()} className="button" type="submit">
                <span>
                    Adicionar
                </span>
            </button>
        </>
    )
}

export default Button; 