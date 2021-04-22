import React, { useContext, useState } from 'react'; 
import { FaShoppingCart } from 'react-icons/fa'; 
import { OrderContext } from '../../context/orderContext';
import PopOver from '../Popover'; 

import './style.css'; 

const Carrinho: React.FC = () => {
    const { order_added } = useContext(OrderContext); 
    const [hiddenPopover, setHiddenPopover] = useState(false); 

    if(order_added){
        setTimeout(() => {
            setHiddenPopover(true); 
        }, 5000)
    }else{
        setTimeout(() => {
            setHiddenPopover(false); 
        }, 1000)
    }
    
    return(
        <div className="main__container">
            <div className="container__carrinho">
                {order_added && (
                    <div className="carrinho__numberOfItens">1</div>
                )}
                
                <FaShoppingCart size={25} color="#D80000"/>
                <span className="carrinho__titleColor ">Carrinho</span>
            </div>
            {order_added && <PopOver show={hiddenPopover}  />}
        </div>
    )
}

export default Carrinho; 