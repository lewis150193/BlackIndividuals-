import React, { Component } from 'react';
import './articles.css';
import '../components/Footer';
import logo from '../logo.png';
import { Footer } from '../components/Footer';
import {NavBar} from '../Navbar/navbar';

import {Grid} from './gridSystem';
class articles extends Component {

  

  render() {
    return (
      <div className="App">
       <header className = "App-header">
       <img src = {logo} className = "App-logo" alt = "logo"/>
       <h1 className = "App-title display-4 text-center">Black Individuals 
       <br/><small className="text-muted">Personal Blog </small>
       </h1> 
       <h2>Articles</h2>
       </header>

       <NavBar/>

       <Grid/>
      <hr/>
       <Footer/> 
       </div>
    );
  }
}

export default articles;
