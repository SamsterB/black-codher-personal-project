import React, { useState } from 'react';
//import "./App.css";
import "./App.scss";
import Header from "./components/Header";
import Punches from "./Pages/Punches";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import { useState } from 'react';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";


function App() {
  const [cartItems, setCartItems] = useState ([]);
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <Punches/>
          </Route>
          <Route path='/'>
            <Basket>cartItems={cartItems}</Basket>
          </Route>
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
};
  // ReactDOM.render(<App />,document.getElementById('root'));
  
  export default App;
  