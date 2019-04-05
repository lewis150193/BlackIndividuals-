import React, { Component } from 'react';
import "./App.css";
import logo from "./logo.png";

import { AlsBio } from "./alsahidBio";
import { LewisWBio } from "./lewisBio";
import { JohnFBio } from "./johnBio";

import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import ULottie from './components/world';
import { from } from 'rxjs';

class About extends Component {

  

  state = { isSignedIn : false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user =>{
      this.setState({isSignedIn: !!user})
      console.log("user", user)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isSignedIn ?(
            <span>
            <h1 className = "WelcomeSignIn">Welcome {firebase.auth().currentUser.displayName}</h1>
            <button className ="SignOutBtn btn btn-outline-warning" onClick = {()=>firebase.auth().signOut()}>Sign Out!</button> 
            <img  className = "ProfilePic"alt = "profile picture" 
            src = {firebase.auth().currentUser.photoURL}/>
            </span>
          ):
          (
            <StyledFirebaseAuth
            uiConfig = {this.uiConfig}
            firebaseAuth = {firebase.auth()}
            />
          )}        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title display-4 text-center">
            Black Individuals
            <br />
            <small className="text-muted">Personal Blog </small>
          </h1>
        </header>
        <Navbar />
        <ULottie/>
      
        <hr />
        <h2>Who We Are</h2>
        <hr />
        <div class="container">
    <div class="row">
      <JohnFBio/>
     <AlsBio/>
      <LewisWBio/> 

    </div>
    
</div>
        <hr />
       
        <hr />
        <Footer />
        <div />
      </div>
    );
  }
}
export default About;

