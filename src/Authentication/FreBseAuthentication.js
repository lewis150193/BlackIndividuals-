import React, { Component } from "react";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './firebaseui-styling.global.css';

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
      <div className= "boxAuth">
        <header className="authenticate">
          {this.state.isSignedIn ?(
            <span>
            <h3 className = "WelcomeSignIn">Welcome {firebase.auth().currentUser.displayName}</h3>
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

        </header>
        <hr />
        <div />
      </div>
    );
  }
}
  
  export default FreBseAuth;