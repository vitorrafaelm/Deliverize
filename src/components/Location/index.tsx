import React from "react";
import { FaChevronDown } from 'react-icons/fa'; 

import './style.css'; 

const Location: React.FC = () => {
  return (
    <div className="location__container">
      <form action="">
        <div>
            <label className="container__title" htmlFor="Entrega">Entrega</label>
            <span className="container__arrow">
              <FaChevronDown size={12} color="#D80000"/>
            </span>
            <select name="cars" id="cars">
                <option value="R. Antonio Braune, 222">
                    R. Antonio Braune, 222
                </option>
            </select>
        </div>
        
      </form>
    </div>
  );
};

export default Location;
