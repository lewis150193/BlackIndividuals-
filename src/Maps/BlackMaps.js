import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../Navbar/navbar";
import ULottie from "../components/world";
import Mapspage from './mapspage';

class BlkMaps extends Component {
  render() {
    return (
        <>
        <NavBar />
        <ULottie />
        <Mapspage />
        <Footer />
        </>
    );
  }
}
export default BlkMaps;
