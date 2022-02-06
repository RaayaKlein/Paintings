import React from 'react'
import logo from '../logo.png'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from '../screens/About';
import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Countries from '../screens/Countries';

const Navbar = () => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                     <img className="App-logo" src={logo} alt="logo..." height="40px"/> 
                </a>
                <div className="nav-item">
                    <Link to="/" className="nav-link name">Raaya Klein art</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/countries" className="nav-link">Countries</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li> */}
                 </ul>
                </div>
            </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/countries">
            <Countries/>
          </Route>
        </Switch>
        </Router>
    )
}

export default Navbar;
