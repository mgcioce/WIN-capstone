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

                <h1 className="pagetitle">The Most Overrated Actor</h1>

                <div className="leopic">
                    <div >
                        <img src="https://www.cheatsheet.com/wp-content/uploads/2019/08/Leonardo-Di-Caprio.jpg"/>
                    </div>
                </div>

                    <p className={"leo-overrated"}> "Leonardo DiCaprio is overrated. All of his roles could have been played
                        better by other actors." -Kyle </p>

                    <div className="Dicussion-Container">

                    </div>

                    <div className="Dicussion-Container">
                <Disqus.DiscussionEmbed
                    shortname={'movieclub-1'}
                    config={disqusConfig}
                />
                    </div>
            </div>


        );
    }
}