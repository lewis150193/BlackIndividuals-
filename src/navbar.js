import React, {Component} from 'react'

export class Navbar extends Component{
    render() {
        
        return (
           
            <div className="navbar">
            <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a> 
            <a href="#"><i className="fa fa-fw fa-search"></i> About</a> 
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a> 
            <a href="localEvents.html"><i className="fa fa-fw fa-user"></i> Local events</a>
          </div>

    
        );
    }
}