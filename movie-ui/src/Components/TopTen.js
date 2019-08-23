import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";
import Movie from "./Movie";

function TopTen() {
    return (
        <div>
            <Navbar/>
            <h3>#10</h3>
            <Movie/>
            <h3>#9</h3>
            <Movie/>
            <h3>#8</h3>
            <Movie/>
            <h3>#7</h3>
            <Movie/>
            <h3>#6</h3>
            <Movie/>
            <h3>#5</h3>
            <Movie/>
            <h3>#4</h3>
            <Movie/>
            <h3>#3</h3>
            <Movie/>
            <h3>#2</h3>
            <Movie/>
            <h3>#1</h3>
            <Movie/>
        </div>
    )
};

export default TopTen;