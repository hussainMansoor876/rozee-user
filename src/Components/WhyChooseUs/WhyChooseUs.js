import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class WhyChooseUs extends Component {
    render() {
        return (
            <div className="site-wrap">
                <div style={{ height: '113px' }} />
                <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
                    <div className="container text-center">
                        <h2 className="mb-0">Why Choose Us</h2>
                        <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Why Choose Us</span></p>
                    </div>
                </div>

                <div className="site-section site-block-feature bg-light">
                    <div className="container">
                        <div className="text-center mb-5 section-heading">
                            <h2>Our Services</h2>
                        </div>
                        <div className="d-block d-md-flex border-bottom">
                            <div className="text-center p-4 item border-right" data-aos="fade">
                                <span className="flaticon-worker display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">More Jobs Every Day</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade">
                                <span className="flaticon-wrench display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Creative Jobs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                        </div>
                        <div className="d-block d-md-flex">
                            <div className="text-center p-4 item border-right" data-aos="fade">
                                <span className="flaticon-stethoscope display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Healthcare</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade">
                                <span className="flaticon-calculator display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Finance &amp; Accounting</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-wrap">
                    <div className="site-section" data-aos="fade">
                        <div className="container">
                            <div className="row align-items-center">
                                
                                <div className="col-md-5 ml-auto">
                                    <div className="text-left mb-5 section-heading">
                                        <h2>CEO Message</h2>
                                    </div>
                                    <p className="mb-4 h5 font-italic lineheight1-5">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..”</p>
                                    <p>— <strong className="text-black font-weight-bold">John Holmes</strong>, Marketing Strategist</p>

                                </div>
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="img-border">
                                        <img src="images/hero_2.jpg" alt="Image" className="img-fluid rounded" />
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

export default WhyChooseUs