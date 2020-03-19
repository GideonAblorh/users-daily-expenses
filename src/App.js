import react from 'react'
import{BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from './component/Home'
import About from './component/About'
import Contacts from './component/Contacts'
import Services from './component/Services'
import Portfolio from './component/Portfolio'

import React from 'react';

function App(props) {
  return (
    <div>
       <Router>
          <div>
            <Link to="Home">Home</Link>
            <Link to="About">About Us</Link>
            <Link to="Contacts">Contacts</Link>
            <Link to="Services">Services</Link>
            <Link to="Portfolio">Portfolio</Link>

            <Route exact={true}path="/Home" component={Home}/>
            <Route exact={true}path="/About" component={About}/>
            <Route exact={true}path="/Contacts" component={Contacts}/>
            <Route exact={true}path="/Services" component={Services}/>
            <Route exact={true}path="/Portfolio" component={Portfolio}/>
          </div>
        </Router>

    </div>
  );
}

export default App;