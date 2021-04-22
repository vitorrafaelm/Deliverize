import React from 'react'; 

import './style.css'; 

const Input: React.FC = () => {
    return(
        <div>
            <form action="">
                <input className="input" placeholder="Busque por um estabelecimento ou produtos" type="text"/>
            </form>
        </div>
    )
}

export default Input; 