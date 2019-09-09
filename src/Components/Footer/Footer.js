/*eslint-disable */

import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="footer-heading mb-4 text-white">About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
                        <p><Link to="/about" className="btn btn-primary pill text-white px-4">Read More</Link></p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                                <ul className="list-unstyled">
                                    <li><Link to="/contactUs" >contact us</Link></li>
                                    <li><Link to="/wantJob" >Search Job</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="footer-heading mb-4 text-white">Categories</h3>
                                <ul className="list-unstyled">
                                    <li><a >Freelancer</a></li>
                                    <li><a >Permanent</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                        <div className="col-md-12">
                            <p>
                                <a  className="pb-2 pr-2 pl-0"><span className="icon-facebook" /></a>
                                <a  className="p-2"><span className="icon-twitter" /></a>
                                <a  className="p-2"><span className="icon-instagram" /></a>
                                <a  className="p-2"><span className="icon-vimeo" /></a>
                            </p>
                        </div>
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
