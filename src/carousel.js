import React, {Component} from 'react'
import nicki from './img/nicki.jpg'
import nas from './img/nas.jpg'
import jcole from './img/jcole.jpg'
import './carousel.css';

export class Carousel extends Component{
    render() {
        
        return (
           

   
   <div id = "slides" className = "carousel slide" data-ride = "carousel">
     <ul className = "carousel-indicators">
       <li data-target = "#slides" data-slide-to = "0" className = "active"></li>
       <li data-target = "#slides" data-slide-to = "1"></li>
       <li data-target = "#slides" data-slide-to = "2"></li>
      </ul>
      <div className = "carousel-inner">
        <div className = "carousel-item active">
        <img src = {jcole} />
        </div>
        <div className = "carousel-item">
        <img src = {nas} />
        </div>
        <div className = "carousel-item">
        <img src = {nicki} />
        </div>
      </div>
      <a className="left carousel-control" href="#slides" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#slides" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>


   </div>



    
        );
    }
}