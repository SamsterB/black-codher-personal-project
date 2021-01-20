import "./App.scss";
import Header from "./components/Header";
import Punches from "./Pages/Punches";
import About from "./Pages/About";
import Footer from "./components/Footer";
import { useState } from 'react';
import Login from "./Pages/Login/Login";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";


function App() {
  const [count,setcount]=useState(0)
  const incCount =  () => {setcount(count+1)}
  return (
    <div className="container">
      <Router>
        <Header count = {count}/>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Punches updateCount= {incCount}/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};
  // ReactDOM.render(<App />,document.getElementById('root'));
  
  export default App;
  