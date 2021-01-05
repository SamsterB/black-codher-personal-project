import React from 'react';
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/mainContent";
import Footer from "./components/Footer";
//import {BrowserRouter as Router , Switch, Route,Link} from "react-router-dom";


function App() {
  return (
      <div className="container">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  };
  // ReactDOM.render(<App />,document.getElementById('root'));
  
  export default App;
  