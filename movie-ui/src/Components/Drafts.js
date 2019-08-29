import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";


function Drafts() {
    return (
        <div>
            <Navbar/>

            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Pravin's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Maurice's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">GQ's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
            </div>

            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Mike's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ashley's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Kyle's Picks</h5>
                        <p className="card-text">1. </p>
                        <p className="card-text">2. </p>
                        <p className="card-text">3. </p>
                        <p className="card-text">4. </p>
                        <p className="card-text">5. </p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Drafts;