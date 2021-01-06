import React from 'react';
import "./App.css";
import "./App.scss";
import Header from "./components/Header";
import Punches from "./Pages/Punches";
import About from "./Pages/About";
import Footer from "./components/Footer";
import {BrowserRouter as Router , Switch, Route,Link} from "react-router-dom";


function App() {
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
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
};
  // ReactDOM.render(<App />,document.getElementById('root'));
  
  export default App;
  