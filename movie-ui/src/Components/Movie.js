import React from 'react';
import '../CSS/HomeCSS.css';

function Movie() {
    return (
        <div className="title-row">
            <div className="row">
                <div className="col-sm-8 movie-card-title">
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title">original_title</h5>
                            <p className="card-text">overview</p>
                            <p className="card-text">popularity</p>
                            <a href="#" className="btn btn-primary">Join the Discussion</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card home-card-image">
                        {/*<img className="jumbotron-img"*/}
                        {/*     src=""/>*/}
                        <p>poster_path</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Movie;