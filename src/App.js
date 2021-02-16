import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import TinderKartica from './Tinderkartica.js';
import { BrowserRouter ,Switch,Route,Link } from "react-router-dom";
import swajp from './swajp.js';

function App() {
  return (

    <div className="App">
         <Header/>
         
      <BrowserRouter>
            <Switch> 
              <Route path="/chat">
                <h1>chat👄</h1>
              </Route>
              <Route path="/">
                <TinderKartica />
              </Route>
            </Switch>
           



      </BrowserRouter>
    


    </div>
  );
}

export default App;
