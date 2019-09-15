/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Images/companyLogo.jpeg'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 flexer">
                            <img className="mb-0 footer-logo" height="140px" style={{ boxShadow: '0px 0px 5px 5px grey ' }} width="120px" src={logo} alt="company logo" />

                        </div>
                        <div className="col-md-3">

                            <h3 className="footer-heading mb-4 text-white">Contact Us</h3>
                            <p>If you are interested in learning more about.</p>
                            <p>JOB FINDER, please contact us.</p>
                            <p><Link to="/contactUs" className="btn btn-primary pill text-white px-4">Contact Us</Link></p>

                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="footer-heading text-white">Quick Menu</h3>
                                    <ul className="list-unstyled">
                                        <li><Link to="/about" >about us</Link></li>
                                        <li><Link to="/whyChooseUs" >Why choose us</Link></li>
                                        <li><Link to="/clients" >Clients</Link></li>
                                        <li><Link to="/servicesforclients" >Client Services</Link></li>
                                        <li><Link to="/servicesforcandidates" >Candidate</Link></li>
                                        <li><Link to="/searchJob" >Job search</Link></li>
                                        <li><Link to="/wantJob" >Want job</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 ">
                                    <h3 className="footer-heading mb-4 text-white">Categories</h3>
                                    <ul className="list-unstyled">
                                        <li><a >Freelancer</a></li>
                                        <li><a >Permanent</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h3 className="footer-heading mb-4 text-white">Social Icons</h3>
                            <p>
                                <a className="pb-2 pr-2 pl-0"><span className="icon-facebook" /></a>
                                <a className="p-2"><span className="icon-twitter" /></a>
                                <a className="p-2"><span className="icon-instagram" /></a>
                                <a className="p-2"><span className="icon-vimeo" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                Copyright ©  All Rights Reserved | This Website is made in collaboration with <i className="icon-heart text-danger" aria-hidden="true" /> by <a target="_blank"> Axiom Enterprises </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
