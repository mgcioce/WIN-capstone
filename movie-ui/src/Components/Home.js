import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'


function home() {
  return (
    <div>

      <Navbar />

      <div class="title-row">
      <div className="row">
        <div className="col-sm-4 home-card-title">
          <div className="card border-0">
            <div className="card-body">
              <h3 className="card-title">Movie of the Week!</h3>
              <h5 className="card-title">Coming to America</h5>
              <p className="card-text">"So you see, my son, there is a very fine line between love and nausea."</p>
              <a href="#" className="btn btn-primary">Join the Discussion</a>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="card home-card-image">
            <img className="jumbotron-img"
                 src="http://www.jetmag.com/wp-content/uploads/2017/04/coming-to-america-sequel-1489674155.jpg"/>
          </div>
        </div>
      </div>
      </div>
      <div class="card-deck justify-content-center align-self-center">
        <div class="card">
          <img class="card-img-top" src="https://www.indiewire.com/wp-content/uploads/2017/02/shutterstock_7898420om.jpg?w=780" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Top 10 Tom Hanks Movies Ranked!</h5>
            <p class="card-text">From Forrest Gump to Philadelphia, our team of critics has ranked the top ten Tom Hanks movies. Click to find out where your favorites ranked.</p >
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://2fvqxa3fxpfi2sm7tt1oe5ln-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/posters2.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">This week's draft: Rom-Coms</h5>
            <p class="card-text">Love and humor. It's a tricky mix. Click to see the results of our team's draft of romantic comedies. </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://img.buzzfeed.com/buzzfeed-static/static/2018-03/7/11/enhanced/buzzfeed-prod-fastlane-01/enhanced-15721-1520441387-4.png?output-format=auto&output-quality=auto" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Overrated? You bet.</h5>
            <p class="card-text">This guy is overrated. Replace him with nearly anyone else and his movies would have been just as good if not better.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default home;