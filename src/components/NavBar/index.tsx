import React, { useContext } from 'react'; 
import { MdKeyboardArrowLeft } from 'react-icons/md'; 

import Logo from '../../assets/Deliverize.svg'; 

import Location from '../Location'; 
import Input from '../Input';
import Login from '../Login'; 
import Carrinho from '../Carrinho'; 

import './style.css'; 

const NavBar: React.FC = () => {
    return (
        <div className="navBarContainer">
            <MdKeyboardArrowLeft className="navBarContainer__arrowLeft" color="#686868" size={25} />
            <img className="navBarContainer__logo" src={Logo} alt=""/>

            <div className="navBarContainer__item">
                <Location />
                <Input />
                <Login />
                <Carrinho />
            </div>
        </div>
    )
}

export default NavBar; 