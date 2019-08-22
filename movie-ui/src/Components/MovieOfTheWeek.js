import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar';

function MovieOfTheWeek() {
    return (
        <div>
             <div>
                  <Navbar />
                 <h1>Movie of the Week!</h1>
             </div>
            <row>
             <div className="card w-70">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>
              </div>
            </row>
        </div>
    )
};

export default MovieOfTheWeek;