import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'


function MovieSearchResult() {
    return (
        <div>
            <Navbar/>

            <div className="searchgif">
                <div >
                    <img src="https://media1.giphy.com/media/yoOotVRp4JMxVTEgDy/giphy.gif"/>
                </div>
            </div>

                <p className="searchtext"> We never got this working. But we got a lot closer than this guy did to dunking.</p>


        </div>
    )
};

export default MovieSearchResult;