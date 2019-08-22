import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'


function home() {
  return (
    <div>
      <Navbar />

      {/*<div className="row jumbo-cont">*/}
      {/*  <div className="col-10 offset-1">*/}
      {/*    <div class="jumbotron border-dark mb-3">*/}
      {/*      <div class="container">*/}
      {/*        <img class="jumbotron-img" src="https://www.indiewire.com/wp-content/uploads/2012/11/Casablanca-Poster.jpg"/>*/}
      {/*      </div>*/}
      {/*        <p className="lead">“It's still the same old story, a fight for love and glory.”</p>*/}
      {/*          <p class="lead">*/}
      {/*          <a class="home-btn btn btn-primary btn-lg discussionbutton" href="#" role="button">JOIN THE DISCUSSION</a> </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div class="title-row">
      <div className="row">
        <div className="col-sm-4 home-card-title">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Movie of the Week!</h5>
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
            <h5 class="card-title">Top 3 Tom Hanks Movies</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://miro.medium.com/max/1838/0*dmstwJjUOCaMv29r" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Drafts</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://s3-media4.fl.yelpcdn.com/bphoto/jjtWVvajDeFRZjSYaXZvEg/o.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Cioce's Corner</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}


export default home;