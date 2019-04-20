import React, { Component } from "react";
import "../App/App.css";

import { AlsBio } from "./alsahidBio";
import { LewisWBio } from "./lewisBio";
import { JohnFBio } from "./johnBio";
import { Footer } from "../components/Footer";
import { NavBar } from "../Navbar/navbar";
import ULottie from "../components/world";
import { FreBseAuth } from "../Authentication/FreBseAuthentication";

class About extends Component {
  render() {
    return (
      <div className="App">
        <FreBseAuth />
        <NavBar />
        <ULottie />
        <hr />
        <h2>Who We Are</h2>
        <hr />
        <div class="container">
          <div class="row">
            <JohnFBio />
            <AlsBio />
            <LewisWBio />
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
