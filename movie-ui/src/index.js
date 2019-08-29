import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MovieOftheWeek from './Components/MovieOfTheWeek';
import TopTen from "./Components/TopTen";
import MostOverrated from "./Components/MostOverrated";
import Drafts from "./Components/Drafts";
import MovieSearchResult from "./Components/MovieSearchResult";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/MovieOfTheWeek" component={MovieOftheWeek} />
            <Route path="/TopTens" component={TopTen} />
            <Route path="/MostOverrated" component={MostOverrated} />
            <Route path="/Drafts" component={Drafts} />
            <Route path="/MovieSearchResult" component={MovieSearchResult} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
