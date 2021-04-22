import React from 'react'; 
import { FaUserCircle } from 'react-icons/fa'; 

import './style.css'; 

const Login: React.FC = () => {
    return(
        <div className="containerLogin">
            <FaUserCircle size={25} color="#D80000"/>
            <span className="containerLogin__title">Entrar</span>
        </div>
    )
}

export default Login; 