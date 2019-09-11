/*eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Images/companyLogo.jpeg';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <div className="site-navbar-wrap js-site-navbar bg-white">
                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="py-1">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <img className="mb-0" height="70px" width="50px" src={logo} alt="company logo" />
                                    </div>
                                    <div className="col-10">
                                        <nav className="site-navigation text-right" role="navigation">
                                            <div className="container">
                                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                    <li className="border border-black text-warning py-2 px-4 rounded mr-2" style={{borderColor:'black'}}><span className="icon-search mr-3" /><Link to="/searchJob">Search Jobs</Link></li>
                                                    {/* <li><Link to="/contactUs" >Contact</Link></li> */}

                                                    <li className="bg-primary text-white text-white py-2 px-3 rounded  has-children">
                                                        <a style={{color:'white'}}><span className="icon-list mr-3" />Menu</a>
                                                        <ul className="dropdown arrow-top">
                                                        <li><Link to="/" >Home</Link></li>
                                                            <li><Link to="/about" >about us</Link></li>
                                                            <li><Link to="/whyChooseUs" >Why choose us</Link></li>
                                                            <li><Link to="/servicesforclients" >Clients</Link></li>
                                                            <li><Link to="/servicesforclients" >Client Services</Link></li>
                                                            <li><Link to="/servicesforcandidates" >Candidate</Link></li>
                                                            <li><Link to="/searchJob" >Job search</Link></li>
                                                            <li><Link to="/wantJob" >Want job</Link></li>
                                                            <li><Link to="/submitYourCV" >Submit your CV</Link></li>
                                                            <li><Link to="/contactUs" >Conatact us</Link></li>
                                                        </ul>
                                                    </li>



                                                    {/* <li><Link to="/wantJob" ><span className="bg-primary text-white py-3 px-4 rounded has-children">                    
                                                    <a>Menu</a>
                                                        <ul className="dropdown ">
                                                            <li><a href="category.html">Category</a></li>
                                                            <li><a href="#">Browse Candidates</a></li>
                                                            <li><a href="new-post.html">Post a Job</a></li>
                                                            <li><a href="#">Employeer Profile</a></li>
                                                        </ul></span></Link></li> */}
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
