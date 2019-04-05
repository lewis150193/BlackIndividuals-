import React, { Component } from "react";
import Lewis from "./img/lewis.jpg";

export class LewisWBio extends Component {
  render() {
    return (
        <div className="col-sm order-1">
        <img src={Lewis} className="lewis" alt="lewis" class="img-thumbnail"></img>
        <div className="col-sm order-2">
                <p>
                  quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.
                </p>
                <button type="button" className="btn btn-outline-info">
                  Find Out More
                </button>
                </div>
    </div>
    );
  }
}
export default LewisWBio;
