import React  from 'react'
import { withRouter } from "react-router";
import styles from 'styled-components';

const Button = styles.button`
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color: #000;
 text-align:center;
 transition: all 0.2s;

:hover{
 color:#FFF;
 background-color:#000;
}
`;

  const Navbar = (props) => (
            <div className="navbar">
            <Button onClick={() => props.history.push('/')}><i className="fa fa-fw fa-envelope"></i>Home</Button>
            <Button onClick={() => props.history.push('/About')}><i className="fa fa-fw fa-envelope"></i> About Us</Button>
            <Button onClick={() => props.history.push('/maps')}><i className="fa fa-fw fa-envelope"></i> Maps</Button>
            <Button onClick={() => props.history.push('/locslpage')}><i className="fa fa-fw fa-user"></i> Local events</Button>
          </div>
        );
export const NavBar = withRouter(Navbar);
