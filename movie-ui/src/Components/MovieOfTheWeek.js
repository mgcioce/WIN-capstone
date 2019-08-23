import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar';
import CommentApp from './CommentApp';

function MovieOfTheWeek() {
    return (
        <div>
            <Navbar />
            <h1>This is the movie of the week page</h1>
            <CommentApp/>
        </div>
    );
}

export default MovieOfTheWeek;