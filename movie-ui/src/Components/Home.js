import React from 'react';
import '../CSS/HomeCSS.css';
import Navbar from './Navbar.js'


function home() {
  return (
    <div>
      <Navbar />
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Coming To America</h1>
          <p class="lead">This week's movie of the week is Coming To America.</p>
          <p>When you think of garbage, think of Akeem!</p>
          <br />
          <p class="lead">
            <a class="btn btn-primary btn-lg discussionbutton" href="#" role="button">JOIN THE DISCUSSION</a> </p>
        </div>
      </div>
      <div class="card-deck">
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