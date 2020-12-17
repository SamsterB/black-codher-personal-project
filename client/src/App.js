import React, { useState, useEffect } from 'react';
///import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import header from './components/header';
import About from "./Pages/About"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Punchology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About us</Nav.Link>
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Punches</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Immune System</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Instagram</Nav.Link>
          <Nav.Link href="#deets">Basket</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
    </div>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />

    </Router>
  );
}

// SERVICES
import userService from './services/userService';

function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getusers();
    }
  });

  const getusers = async () => {
    let res = await userService.getAll();
    setusers(res);
  };

  const renderUser = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
