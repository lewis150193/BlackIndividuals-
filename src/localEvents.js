import React, { Component } from 'react';
import '../src/App/App.css';
import './Footer/Footer';
import logo from './logo.png';
import common from './img/common.jpg';
import { Footer } from './Footer/Footer';
import {Carousel} from '../src/Carousel/carousel';
import {NavBar} from '../src/Navbar/navbar';


class localEvents extends Component {

  

  render() {
    return (
      <div className="App">
       <header className = "App-header">
       <img src = {logo} className = "App-logo" alt = "logo"/>
       <h1 className = "App-title display-4 text-center">Black Individuals 
       <br/><small className="text-muted">Personal Blog </small>
       </h1>     
       </header>
       <NavBar/>
       <Carousel/>
      <hr/>
      <section className = "container-fluid">
      <section className ="row">
      <div className = "col-sm order-1">
      <img src = {common} className = "common" alt = "common"/>
      </div>
      <div className = "col-sm order-2"><p>Eros elit vulputate donec ad at aliquam aliquet tincidunt, urna nunc consectetur feugiat eros sociosqu adipiscing, cubilia hendrerit justo velit fusce sapien fringilla ullamcorper porta 
      curae nunc adipiscing ut aliquam sollicitudin placerat vulputate amet diam.</p>
      <button type = "button" className = "btn btn-outline-danger">Find Out More</button>
      <div className = "col-12 profile padding">
                <a href = "https://www.facebook.com/"> <i className = "fab fa-facebook"></i></a>
                <a href = "https://twitter.com/"> <i className = "fab fa-twitter"></i></a>
                <a href = "https://www.youtube.com/"> <i className = "fab fa-youtube"></i></a>
                <a href = "https://www.google.com/"> <i className = "fab fa-google-plus-g"></i></a>
                <a href = "https://www.instagram.com/"> <i className = "fab fa-instagram"></i></a>
    </div>
      </div>
      </section>
      </section>
      <hr/>

       <Footer/> 
       </div>
    );
  }
}

export default localEvents;
