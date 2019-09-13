/*eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Images/companyLogo.jpeg';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {

    handlePush = () => {
        this.props.history.push('/')
    }

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

                <div className="home-site-navbar-wrap ">
                    <div className="container">
                        <div className="site-navbar">
                            <div className="py-1">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <img className="mb-0 mt-4" style={{ cursor: 'pointer' }} height="90px" width="70px" src={logo} onClick={this.handlePush} alt="company logo" />
                                    </div>
                                    <div className="col-10">
                                        <nav className="site-navigation text-right" role="navigation">
                                            <div className="container">
                                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                    <li className="border border-dark text-warning py-2 px-4 rounded mr-2" style={{ borderColor: 'black', backgroundColor: 'white' }}><span className="icon-search mr-3" /><Link to="/searchJob">Search Jobs</Link></li>
                                                    {/* <li><Link to="/contactUs" >Contact</Link></li> */}

                                                    <li className="bg-primary text-white text-white py-2 px-3 rounded  has-children">
                                                        <a style={{ color: 'white' }}><span className="icon-list mr-3" />Menu</a>
                                                        <ul className="dropdown arrow-top" style={{ width: '250px' }}>


                                                            <li><Link to="/" >Home</Link></li>
                                                            <li><Link to="/about" >About us</Link></li>
                                                            <li><Link to="/whyChooseUs" >Why choose us</Link></li>
                                                            <li><Link to="/clients" >Clients</Link></li>
                                                            <li><Link to="/servicesforclients" >Client Services</Link></li>

                                                            <li><Link to="/servicesforcandidates" >Candidate</Link></li>
                                                            <li><Link to="/searchJob" >Job search</Link></li>
                                                            <li><Link to="/wantJob" >Want job</Link></li>
                                                            <li><Link to="/servicesforcandidates#submitCV" >Submit your CV</Link></li>
                                                            <li><Link to="/contactUs" >Contact us</Link></li>





                                                        </ul>

                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(HomeHeader)


