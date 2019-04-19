import React, { Component } from "react";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import logo from "../logo.png";

firebase.initializeApp({
  apiKey: "AIzaSyApqpaEG3Iz9a7gPTgPjZ7cX5JppLKom4A",
  authDomain: "blackindividuals.firebaseapp.com"
});

export class FreBseAuth extends Component {
  
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
      <div className="AppS">
        <header className="App-headerR">
          {this.state.isSignedIn ?(
            <span>
            <h1 className = "WelcomeSignIn">Welcome {firebase.auth().currentUser.displayName}</h1>
            <button className ="SignOutBtn btn btn-outline-warning" onClick = {()=>firebase.auth().signOut()}>Sign Out!</button> 
            <img  className = "ProfilePic"alt = "profile "
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
        <hr />
        <div />
      </div>
    );
  }
}
  
  export default FreBseAuth;