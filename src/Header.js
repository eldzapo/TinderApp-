import React from 'react';
import "./App.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import App from './App';

function Header() {
  return (
    <div className="Header">
      
      <BsFillPersonFill size="30px" color="#ccc"/>
  
      <img 
        src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38604/preview.svg" 
        className="logač"/>

      <BsFillChatSquareFill size="30px" color="#ccc" />
    </div>
  );
}

export default Header;
