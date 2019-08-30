import React, { Component } from 'react';
import '../CSS/HomeCSS.css';
import Navbar from "./Navbar";
import CaptainPhillips from "../static/images/Captain-Phillips.jpg";
import Forrest from "../static/images/Forrest-Gump.jpg";
import Catch from "../static/images/Catch-Me-If-You-Can.jpg";
import Philly from "../static/images/Philadelphia.png";
import Saving from "../static/images/Saving-Private-Ryan.jpg";
import Disqus from "disqus-react";




export default class TopTen extends Component {
    render() {
        const disqusShortname = "movieclub-1" //found in your Disqus.com dashboard
        const disqusConfig = {
            url: "http://localhost:3000/TopTen", //this.props.pageUrl
            identifier: "TopTen", //this.props.uniqueId
            title: "Tom Hanks Top 5" //this.props.title
        }

        return (
            <div>
                <Navbar/>

                <h1 className="pagetitle">Top Five Tom Hanks Movies, Ranked!</h1>

                <div className="title-row">
                    <div className="row">
                        <div className="col-sm-8 movie-card-title">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 className="card-title">#5</h3>
                                    <h5 className="card-title">Captain Phillips</h5>
                                    <p className="card-text">In April 2009, the U.S. containership Maersk Alabama sails
                                        toward its destination on a day that seems like any other. Suddenly, Somali
                                        pirates race toward the vessel, climb aboard and take everyone hostage. The
                                        captain of the ship, Richard Phillips (Tom Hanks), looks to protect his crew
                                        from the hostile invaders, and their leader, Muse (Barkhad Abdi). The pirates
                                        are after millions of dollars, and Phillips must use his wits to make sure
                                        everyone survives and returns home safely.</p>
                                    <a href="#" className="btn btn-primary">Join the Discussion</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-card-image">
                                <img className="captain" src={CaptainPhillips} alt="Captain Phillps"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-row">
                    <div className="row">
                        <div className="col-sm-8 movie-card-title">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 className="card-title">#4</h3>
                                    <h5 className="card-title">Forrest Gump</h5>
                                    <p className="card-text">Slow-witted Forrest Gump (Tom Hanks) has never thought of
                                        himself as disadvantaged, and thanks to his supportive mother (Sally Field), he
                                        leads anything but a restricted life. Whether dominating on the gridiron as a
                                        college football star, fighting in Vietnam or captaining a shrimp boat, Forrest
                                        inspires people with his childlike optimism. But one person Forrest cares about
                                        most may be the most difficult to save -- his childhood love, the sweet but
                                        troubled Jenny (Robin Wright).</p>
                                    <a href="#" className="btn btn-primary">Join the Discussion</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-card-image">
                                <img className="comingtoamerica" src={Forrest} alt="Coming to America"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-row">
                    <div className="row">
                        <div className="col-sm-8 movie-card-title">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 className="card-title">#3</h3>
                                    <h5 className="card-title">Catch Me If You Can</h5>
                                    <p className="card-text">Frank Abagnale, Jr. (Leonardo DiCaprio) worked as a doctor,
                                        a lawyer, and as a co-pilot for a major airline -- all before his 18th birthday.
                                        A master of deception, he was also a brilliant forger, whose skill gave him his
                                        first real claim to fame: At the age of 17, Frank Abagnale, Jr. became the most
                                        successful bank robber in the history of the U.S. FBI Agent Carl Hanratty (Tom
                                        Hanks) makes it his prime mission to capture Frank and bring him to justice, but
                                        Frank is always one step ahead of him.</p>
                                    <a href="#" className="btn btn-primary">Join the Discussion</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-card-image">
                                <img className="comingtoamerica" src={Catch} alt="Coming to America"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-row">
                    <div className="row">
                        <div className="col-sm-8 movie-card-title">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 className="card-title">#2</h3>
                                    <h5 className="card-title">Philadelphia</h5>
                                    <p className="card-text">Fearing it would compromise his career, lawyer Andrew
                                        Beckett (Tom Hanks) hides his homosexuality and HIV status at a powerful
                                        Philadelphia law firm. But his secret is exposed when a colleague spots the
                                        illness's telltale lesions. Fired shortly afterwards, Beckett resolves to sue
                                        for discrimination, teaming up with Joe Miller (Denzel Washington), the only
                                        lawyer willing to help. In court, they face one of his ex-employer's top
                                        litigators, Belinda Conine (Mary Steenburgen).</p>
                                    <a href="#" className="btn btn-primary">Join the Discussion</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-card-image">
                                <img className="comingtoamerica" src={Philly} alt="Coming to America"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-row">
                    <div className="row">
                        <div className="col-sm-8 movie-card-title">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 className="card-title">#1</h3>
                                    <h5 className="card-title">Saving Private Ryan</h5>
                                    <p className="card-text">Captain John Miller (Tom Hanks) takes his men behind enemy
                                        lines to find Private James Ryan, whose three brothers have been killed in
                                        combat. Surrounded by the brutal realties of war, while searching for Ryan, each
                                        man embarks upon a personal journey and discovers their own strength to triumph
                                        over an uncertain future with honor, decency and courage.</p>
                                    <a href="#" className="btn btn-primary">Join the Discussion</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-card-image">
                                <img className="comingtoamerica" src={Saving} alt="Coming to America"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="Dicussion-Container">
                <Disqus.DiscussionEmbed
                    shortname={'movieclub-1'}
                    config={disqusConfig}
                />
                </div>
            </div>
        )
    };

}