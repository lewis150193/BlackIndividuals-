import React, { Component } from "react";
import John from "./img/john.jpg";

export class JohnFBio extends Component {
  render() {
    return (
        <div className="col-sm order-1">
        <img src={John} className="john" alt="john" class="img-thumbnail"></img>   
        <div className="col-sm order-2">
                <p>
                  Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                  tristique quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.
                </p>
                <button type="button" className="btn btn-outline-secondary">
                  Find Out More
                </button>
                </div> 
      </div>
    );
  }
}
export default JohnFBio;
