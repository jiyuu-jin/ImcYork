import React from 'react'
import Link from 'gatsby-link';
require('materialize-css');

const IndexPage = () =>({
    render(){
        return(
            <div>
                <div className="slider big-slider">
                    <ul className="slides big-slides">
                        <li>
                            <img src="/images/imc10.jpg"/>
                        </li>
                        <li>
                            <img src="/images/sculpt.jpg"/>
                            <div className="caption left-align">
                                <h3>SculpSure</h3>
                                <h5 className="light grey-text text-lighten-3">FDA cleared for the treatment of the abdomen, flanks, back, inner thighs, and outer thighs
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row physicians">
                    <div className="col s12 m3 center">
                        <img height="200px" src="/images/Tom2.jpg"/>
                        <h5>Dr. Thomas F. Kurland</h5>
                    </div>
                    <div className="col s12 m3 center">
                        <img height="200px" src="/images/Pete3.jpg"/>
                        <h5>Dr. Peter A. Kouvatsos</h5>
                    </div>
                    <div className="col s12 m3 center">
                        <img height="200px" src="/images/Carol.jpg"/>
                        <h5>Carol Snyder, CRNP</h5>
                    </div>
                    <div className="col s12 m3 center">
                        <img height="200px" src="/images/Bradley.jpg"/>
                        <h5>Dr. Craig Bradley</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content black-text">
                                <span className="card-title">Our Misson</span>
                                <p>IMC is a group of board-certified physicians specializing in general internal medicine.
                                    Our goal is to provide you with a first class patient experience and immediate access to our doctors to help you maintain your health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    componentDidMount(){
        $('.slider').slider();
    }

});

export default IndexPage
