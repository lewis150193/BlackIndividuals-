import React, { Component } from "react";
import "./App.css";
import "./Footer";
import logo from "./logo.png";
import serena from "./img/serena.jpg";
import common from "./img/common.jpg";
import colin from "./img/colin.jpg";
import { Footer } from "./Footer";
import { Carousel } from "./carousel";
import { NavBar } from "./navbar";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyApqpaEG3Iz9a7gPTgPjZ7cX5JppLKom4A",
  authDomain: "blackindividuals.firebaseapp.com"
})

class App extends Component {
  
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
    console
        .log(this.props)
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
        <NavBar />
        <Carousel />
        <hr />

        <section className="container-fluid">
          <section className="row">
            <div className="col-sm order-1">
              <img src={serena} className="serena" alt="serena" />
            </div>
            <div className="col-sm order-2">
              <p>
                Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                tristique quisque, posuere tempor etiam lacinia conubia cursus
                tellus magna eget maecenas, interdum sodales tincidunt velit
                purus aptent aliquet fusce pulvinar semper egestas volutpat
                facilisis ante.
              </p>
              <button type="button" className="btn btn-outline-warning">
                Find Out More
              </button>
              <div className="col-12 profile padding">
                <a href="https://www.facebook.com/">
                  {" "}
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://twitter.com/">
                  {" "}
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.youtube.com/">
                  {" "}
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.google.com/">
                  {" "}
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="https://www.instagram.com/">
                  {" "}
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </section>
        <hr />

        <section className="container-fluid">
          <section className="row">
            <div className="col-sm order-1">
              <img src={colin} className="colin" alt="colin" />
            </div>
            <div className="col-sm order-2">
              <p>
                Eros elit vulputate donec ad at aliquam aliquet tincidunt, urna
                nunc consectetur feugiat eros sociosqu adipiscing, cubilia
                hendrerit justo velit fusce sapien fringilla ullamcorper porta
                curae nunc adipiscing ut aliquam sollicitudin placerat vulputate
                amet diam.
              </p>
              <button type="button" className="btn btn-outline-primary">
                Find Out More
              </button>
              <div className="col-12 profile padding">
                <a href="https://www.facebook.com/">
                  {" "}
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://twitter.com/">
                  {" "}
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.youtube.com/">
                  {" "}
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.google.com/">
                  {" "}
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="https://www.instagram.com/">
                  {" "}
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </section>
        <hr />

        <section className="container-fluid">
          <section className="row">
            <div className="col-sm order-1">
              <img src={common} className="common" alt="common" />
            </div>
            <div className="col-sm order-2">
              <p>
                Eros elit vulputate donec ad at aliquam aliquet tincidunt, urna
                nunc consectetur feugiat eros sociosqu adipiscing, cubilia
                hendrerit justo velit fusce sapien fringilla ullamcorper porta
                curae nunc adipiscing ut aliquam sollicitudin placerat vulputate
                amet diam.
              </p>
              <button type="button" className="btn btn-outline-danger">
                Find Out More
              </button>
              <div className="col-12 profile padding">
                <a href="https://www.facebook.com/">
                  {" "}
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://twitter.com/">
                  {" "}
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.youtube.com/">
                  {" "}
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.google.com/">
                  {" "}
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="https://www.instagram.com/">
                  {" "}
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </section>
        <hr />

        <p>Al Lewis John</p>
        <Footer />
        <div />
      </div>
    );
  }
}

export default App;
