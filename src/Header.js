import React from 'react';
import "./App.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import App from './App';
import { IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="Header">
      
        <IconButton>
            <BsFillPersonFill size="30px" color="#ccc"/>
        </IconButton>
      <img 
        src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38604/preview.svg" 
        className="logač"/>

        <IconButton>
          <BsFillChatSquareFill size="30px" color="#ccc" />
          </IconButton>
    </div>
  );
}

export default Header;
