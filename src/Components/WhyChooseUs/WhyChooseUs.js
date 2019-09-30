import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class WhyChooseUs extends Component {
    render() {
        return (
            <div className="site-wrap">
                {/* <div style={{ height: '113px' }} /> */}
                <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/aboutus1.jpg")' }}>
                    <div className="container text-center">
                        <h2 className="mb-0">Why Choose Us</h2>
                        <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Why Choose Us</span></p>
                    </div>
                </div>

                <div className="site-section site-block-feature bg-light">
                    <div className="container">
                        {/* <div className="text-center mb-5 section-heading">
                            <h2>Our Services</h2>
                        </div> */}
                        <div className="d-block d-md-flex border-bottom" style={{ width: '100%' }}>
                            <div className="text-center p-4 item border-right" data-aos="fade" style={{ width: '100%' }}>
                                <span className="flaticon-worker display-3 mb-3 d-block text-primary" />
                                {/* <h2 className="h4">More Jobs Every Day</h2> */}
                                <p>
                                    Our teams specialize within their technological and geographical fields, allowing them to work together in teams to fulfil client’s requirements, even for the most niche and in-demand skills.
                                </p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade" style={{ width: '100%' }}>
                                <span className="flaticon-wrench display-3 mb-3 d-block text-primary" />
                                {/* <h2 className="h4">Creative Jobs</h2> */}
                                <p>
                                    We deliver our clients well-matched candidates within 24 hours at the most competitive rates on the market thanks to our extensive and growing network.
                                </p>
                            </div>
                        </div>
                        <div className="d-block d-md-flex" style={{ width: '100%' }}>
                            <div className="text-center p-4 item border-right" data-aos="fade" style={{ width: '100%' }}>
                                <span className="flaticon-stethoscope display-3 mb-3 d-block text-primary" />
                                {/* <h2 className="h4">Healthcare</h2> */}
                                <p>
                                    Our internal sourcing and recruiting team aim to make our client’s search easier, by using the most up-to-date resources and techniques, which are constantly revised and improved.
                                </p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade" style={{ width: '100%' }}>
                                <span className="flaticon-calculator display-3 mb-3 d-block text-primary" />
                                {/* <h2 className="h4">Finance &amp; Accounting</h2> */}
                                <p>
                                    247 IT International is set to grow significantly over the upcoming years as a result of our re-investments back into our people and resources.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-wrap">
                    <div className="site-section" data-aos="fade">
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-md-6 ml-auto">
                                    <div className="text-left mb-5 section-heading">
                                        <h2>Services</h2>
                                    </div>
                                    <p className="mb-4 h4 lineheight1-5 font-italic">
                                        With over 100,000 professionals in our network and years of experience,
                                     we have the resources and expertise to connect you with exceptional individuals who are ready to start making an
                                     impact right away whether you need 15 or 50, at 247 IT we offer flexible efficient and collaborative solutions to your
                                      technology based hiring requirements with our focus on you we are more than just a vendor we are a partner our clients.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="img-border">
                                        <img src="images/chooseus.jpg" alt="Image" className="img-fluid rounded" />
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
