import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";


function Drafts() {
    return (
        <div>
            <Navbar/>

            <h1 className="Drafts-title">This week's draft: Romantic Comedies</h1>

            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Pravin's Picks</h5>
                        <p className="card-text">1. Forgetting Sarah Marshall</p>
                        <p className="card-text">2. Kate & Leopold </p>
                        <p className="card-text">3. Failure to Launch</p>
                        <p className="card-text">4. Knocked Up </p>
                        <p className="card-text">5. Never Been Kissed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Maurice's Picks</h5>
                        <p className="card-text">1. The Wedding Singer </p>
                        <p className="card-text">2. What Women Want </p>
                        <p className="card-text">3. Hitch </p>
                        <p className="card-text">4. The Proposal </p>
                        <p className="card-text">5. Trainwreck </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">GQ's Picks</h5>
                        <p className="card-text">1. Shrek </p>
                        <p className="card-text">2. Nutty Professor II The Klumps</p>
                        <p className="card-text">3. Norbit</p>
                        <p className="card-text">4. Shrek 2</p>
                        <p className="card-text">5. Boomerang</p>
                    </div>
                </div>
            </div>
            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Mike's Picks</h5>
                        <p className="card-text">1. Mamma Mia</p>
                        <p className="card-text">2. Hairspray</p>
                        <p className="card-text">3. Pitch Perfect</p>
                        <p className="card-text">4. Mamma Mia: Here we Go Again</p>
                        <p className="card-text">5. Rent</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ashley's Picks</h5>
                        <p className="card-text">1. Coming to America</p>
                        <p className="card-text">2. 50 First Dates</p>
                        <p className="card-text">3. Something New</p>
                        <p className="card-text">4. Love Actually</p>
                        <p className="card-text">5. Grease</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Kyle's Picks</h5>
                        <p className="card-text">1. Gigli</p>
                        <p className="card-text">2. Maid in Manhattan  </p>
                        <p className="card-text">3. Monster in Law</p>
                        <p className="card-text">4. The Wedding Planner</p>
                        <p className="card-text">5. Not a movie, but...Jennifer Lopez as a Fly Girl on in Living Color</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Drafts;
