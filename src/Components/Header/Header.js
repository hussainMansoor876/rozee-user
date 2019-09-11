/*eslint-disable */
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/contactUs" >Contact</Link></li>
                                                    <li><Link to="/wantJob" ><span className="bg-primary text-white py-3 px-4 rounded"><span className="icon-plus mr-3" />Want Job</span></Link></li>
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
