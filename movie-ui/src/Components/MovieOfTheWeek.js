import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'
import comingtoamerica from '../static/images/comingtoamerica.jpg'

function MovieOfTheWeek() {
    return (
      <div>
          <Navbar />

          <div className="title-row">
            <div className="row">
                <div className="col-sm-8 movie-card-title">
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title">Coming to America</h5>
                            <p className="card-text">Prince Akeem (Eddie Murphy) is the prince of a wealthy African country and wants for nothing, except a wife who will love him in spite of his title. To escape an arranged marriage, Akeem flees to America accompanied by his persnickety sidekick, Semmi (Arsenio Hall), to find his queen. Disguised as a foreign student working in fast food, he romances Lisa (Shari Headley), but struggles with revealing his true identity to her and his marital intentions to his king father (James Earl Jones).</p>
                            <p className="card-text">"When you think of garbage, think of Akeem!"</p>
                            <a href="#" className="btn btn-primary">Join the Discussion</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="home-card-image">
                        <img className="comingtoamerica" src={comingtoamerica} alt="Coming to America"/>

                    </div>
                </div>
            </div>
        </div>
      </div>
    )
};

export default MovieOfTheWeek;