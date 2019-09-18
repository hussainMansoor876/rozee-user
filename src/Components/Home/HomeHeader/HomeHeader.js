/*eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './Images/companyLogo.jpg';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Drawer, Button } from 'antd'

class HomeHeader extends Component {

    state = {
        visible: false,
        INNER_WIDTH: window.innerWidth
    }


    componentDidMount() {
        window.addEventListener('resize', () => {
            var newWidth = window.innerWidth;
            this.setState({ INNER_WIDTH: newWidth })
        })
    }

    handlePush = () => {
        this.props.history.push('/')
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <React.Fragment>
                {this.state.INNER_WIDTH < 992 ?
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
                                                <img className="mb-0 mt-4 logo" style={{ cursor: 'pointer' }} height="90px" width="70px" src={logo} onClick={this.handlePush} alt="company logo" />
                                            </div>
                                            <div className="col-10">
                                                <nav className="site-navigation text-right" role="navigation">
                                                    <div className="container">
                                                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                                                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                            <li className="border border-dark text-warning py-2 px-4 rounded mr-2" style={{ borderColor: 'black', backgroundColor: 'white' }}><Link to="/searchJob">Search Jobs</Link></li>
                                                            <li className="bg-primary text-white text-white py-2 px-3 rounded  has-children mt-3">
                                                                <a style={{ color: 'white' }}><span className="icon-list mr-3" />Menu</a>
                                                                <ul className="dropdown arrow-top" style={{ width: '250px' }}>


                                                                    <li><Link style={{ color: 'white' }} to="/" >Home</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/about" >About us</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/whyChooseUs" >Why choose us</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/clients" >Clients</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/servicesforclients" >Client Services</Link></li>

                                                                    <li><Link style={{ color: 'white' }} to="/servicesforcandidates" >Candidate</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/searchJob" >Job search</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/wantJob" >Want job</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/servicesforcandidates#submitCV" >Submit your CV</Link></li>
                                                                    <li><Link style={{ color: 'white' }} to="/contactUs" >Contact us</Link></li>

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
                    </div > :
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
                            <div className="container-fluid">
                                <div className="site-navbar">
                                    <div className="py-1">
                                        <div className="row align-items-center">
                                            <div className="col-6  d-flex justify-content-start align-item-start" >
                                                <img className="mb-0 mt-4" border="15" style={{ cursor: 'pointer' }} height="160px" width="150px" src={logo} onClick={this.handlePush} alt="company logo" />
                                                <div className="mt-5 ml-3" >
                                                    <h1 style={{ color: 'white' }} >DELIVERING IT SOLUTIONS <br /><p className="main-banner-text" style={{}}>Together we are dedicated in finding you the best</p></h1>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <nav className="site-navigation text-right" role="navigation">
                                                    <div className="container-fluid">
                                                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                                                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                            <li className="border border-dark text-warning py-2 px-4 rounded mr-2" style={{ borderColor: 'black', backgroundColor: 'white' }}><span className="icon-search mr-3" /><Link to="/searchJob">Search Jobs</Link></li>
                                                            <li className="bg-primary text-white text-white py-2 px-3 rounded">
                                                                <a style={{ color: 'white' }} onClick={this.showDrawer} ><span className="icon-list mr-3" />Menu</a>
                                                                <ul className="dropdown arrow-top">
                                                                    <Drawer
                                                                        placement="right"
                                                                        closable={false}
                                                                        onClose={this.onClose}
                                                                        visible={this.state.visible}
                                                                        width="350px" >
                                                                        <div>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }}><Link to="/" onClick={this.onClose} className="list-view" >Home</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/about" >About us</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/whyChooseUs" >Why choose us</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/clients" >Clients</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/servicesforclients" >Client Services</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/servicesforcandidates" >Candidate</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/searchJob" >Job search</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/wantJob" >Want job</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/servicesforcandidates#submitCV" >Submit your CV</Link></li>
                                                                            <li style={{ listStyleType: 'none', padding: '10px', borderBottom: '1px solid grey' }} ><Link onClick={this.onClose} className="list-view" to="/contactUs" >Contact us</Link></li>
                                                                        </div>
                                                                    </Drawer>
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
                }
            </React.Fragment>
        )
    }
}

export default withRouter(HomeHeader)


