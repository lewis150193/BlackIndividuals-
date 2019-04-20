import React, { Component } from "react";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h2 className="App-connect"> Connect</h2>
          </div>
          <div className="col-12 social padding">
            <button>
              <i className="fab fa-facebook fa-5x " />
            </button>
            <button>
              <i className="fab fa-twitter fa-5x" />
            </button>
            <button>
              <i className="fab fa-instagram fa-5x" />
            </button>
            <button>
              <i className="fab fa-google-plus-g fa-5x" />
            </button>
            <button>
              <i className="fab fa-youtube fa-5x" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;