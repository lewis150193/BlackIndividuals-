import React, { Component } from "react";
import serena from "../img/serena.jpg";
import common from "../img/common.jpg";
import colin from "../img/colin.jpg";

export class Testimony extends Component {
    render() {
        return (
    <div className = "testimony">
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
       
    </div>
     );
    }
}



export default Testimony;