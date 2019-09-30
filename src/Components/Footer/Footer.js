/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Images/companyLogo.png'
import fb from './Images/fb.png';
import twitter from './Images/twitter.png';
import linkdin from './Images/linkdin.png';
import social from './Images/social.png';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 d-flex align-item-center justify-content-center">
                            <img className="mb-0 footer-logo" src={logo} alt="company logo" />

                        </div>
                        <div className="col-md-4">

                            <h3 className="footer-heading mb-4 text-white">Contact Us</h3>
                            <p>0207 473 5838</p>
                            <p>info@247itinternational.com</p>
                            <p>218 Tollgate Road London E6 5YA</p>
                            {/* <p><Link to="/contactUs" className="btn btn-primary pill text-white px-4">Contact Us</Link></p> */}

                        </div>

                        <div className="col-md-3">
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
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h3 className="footer-heading mb-4 text-white">Follow us</h3>
                            <p>
                                <img className="p-2 " style={{ cursor: 'pointer', borderRadius: '50%' }} src={fb} alt="fb-icon" />
                                <img className="p-2" style={{ cursor: 'pointer', borderRadius: '50%' }} src={twitter} alt="twitter-icon" />
                                <img className="p-2" style={{ cursor: 'pointer', borderRadius: '50%' }} src={linkdin} alt="linkdin-icon" />
                                <img className="p-2" style={{ cursor: 'pointer', borderRadius: '50%' }} src={social} alt="social-icon" />
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
