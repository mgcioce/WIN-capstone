import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";

function MostOverrated() {
    return (
        <div>
            <Navbar/>

            <div class="container leo">
                <img src="https://www.cheatsheet.com/wp-content/uploads/2019/08/Leonardo-Di-Caprio.jpg" />
            </div>

            <p class={"leo-overrated"}> Leonardo DiCaprio is overrated. All of his roles could have been played better by other actors.</p>

        </div>


    )
};

    export default MostOverrated;