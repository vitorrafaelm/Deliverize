import React from 'react'; 

import './style.css'; 

interface PopoverProps{
    show: boolean; 
}

const PopOver: React.FC<PopoverProps> = ({ show }) => {
    return(
        <>
            {!show && (
                <div className="popoverContainer">
                <div className="popover_arrow"></div>
                <div className="popover_header">
                    <h2>Adicionado com sucesso</h2>
                </div>
                <div className="popover_body">
                    <h3>Oferta chedar Bacon</h3>
                    <p>Ingredientes</p>
                    <ul>
                        <li>1 Carne 250gr</li>
                        <li>2 Queijo Cheddar</li>
                        <li>1 Bacon</li>
                        <li>Molho Especial</li>
                    </ul>
                </div>
            </div>
            )}
        </>
    ); 
}

export default PopOver; 