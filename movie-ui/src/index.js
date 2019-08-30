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
import DraftsAndBrackets from './Components/DraftsAndBrackets';
import CiocesCorner from './Components/CiocesCorner';
import Discussion from './Components/Discussion';
import DiscussionForum from './Components/DiscussionForum';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/MovieOfTheWeek" component={MovieOftheWeek} />
            <Route path="/DraftsAndBrackets" component={DraftsAndBrackets} />
            <Route path="/CiocesCorner" component={CiocesCorner} />
            <Route path="/Discussions" component={DiscussionForum}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
