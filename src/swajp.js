import App from './App';
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { IconButton } from '@material-ui/core';
import "./App.css";




function swajp() {
  return (

    <div className="swajp">


     <IconButton className="swajpgumb">  
        <RiArrowGoBackFill color="orange" backgroundcolor="white"/>
      </IconButton>
      <IconButton className="swajpgumb">
         <AiOutlineClose color="red"/>
      </IconButton>
      <IconButton className="swajpgumb">
          <AiFillStar color="cornflowerblue"/>
      </IconButton>
      <IconButton className="swajpgumb">
          <AiFillHeart color="#79d2a6
        "/>
      </IconButton>
      <IconButton className="swajpgumb">
           <AiFillThunderbolt color="#915dd1" /> 
      </IconButton>


    </div>
  );
}

export default swajp;