import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'

function Welcome(props){
    return React.createElement(
        "h1",
        null,
        "Hello, ",
        props.name
    );
}