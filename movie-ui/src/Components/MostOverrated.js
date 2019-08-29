import React, { Component } from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";
import Disqus from "disqus-react";

export default class MostOverrated extends Component {
    render() {
        const disqusShortname = "movieclub-1" //found in your Disqus.com dashboard
        const disqusConfig = {
            url: "http://localhost:3000/MostOverrated", //this.props.pageUrl
            identifier: "MostOverrated", //this.props.uniqueId
            title: "Most Overrated Actor" //this.props.title
        }

        return (
            <div>
                <Navbar/>

                <div className="main-div">
                    <div class="container leo">
                        <img src="https://www.cheatsheet.com/wp-content/uploads/2019/08/Leonardo-Di-Caprio.jpg"/>
                    </div>

                    <p class={"leo-overrated"}> Leonardo DiCaprio is overrated. All of his roles could have been played
                        better by other actors.</p>

                </div>
                <Disqus.DiscussionEmbed
                    shortname={'movieclub-1'}
                    config={disqusConfig}
                />
            </div>


        );
    }
}