import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";


function Drafts() {
    return (
        <div>
            <Navbar/>

            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Pravin's Picks</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Ashley's Picks</h5>
                        <p className="card-text"> </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Maurice's Picks</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>

            <div className="card-deck justify-content-center align-self-center draft-top-row">
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Maurice's Picks</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Mike's Picks</h5>
                        <p className="card-text"> </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top"
                         src=""
                         alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Kyle's Picks</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Drafts;