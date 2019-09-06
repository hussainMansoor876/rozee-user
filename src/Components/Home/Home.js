
/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Path from '../../Config/path';
import JobCard from '../JobCard/JobCard';
import { connect } from 'react-redux';
import * as JobMiddleware from '../../Store/middlewares/jobMiddleware';
import Slider from 'react-slick';


class Home extends Component {

    state = {
        isError: false,
        isLoading: false,
        successMessage: "",
        errorMessage: "",
        allJobs: []
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.getJobs();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.isError && nextProps.errorMessage.length > 1) {
            return this.setState({
                isLoading: false,
                isError: nextProps.isError,
                errorMessage: nextProps.errorMessage
            })
        }

        this.setState({
            isLoading: false,
            isError: false,
            errorMessage: "",
            allJobs: nextProps.allJobs,
        })




    }

    render() {

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        }
        const { isError, isLoading, successMessage, errorMessage, allJobs, } = this.state
        return (
            <div className="site-wrap">
                <div style={{ height: '113px' }} />
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/hero_2.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12" data-aos="fade">
                                <h1>Find Job</h1>
                                <form action="#">
                                    <div className="row mb-3">
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <input type="text" className="mr-3 form-control border-0 px-4" placeholder="job title, keywords or company name " />
                                                </div>
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <div className="input-wrap">
                                                        <span className="icon icon-room" />
                                                        <input type="text" className="form-control form-control-block search-input  border-0 px-4" id="autocomplete" placeholder="city, province or region" /* onFocus="geolocate()" */ />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                                <h2 className="mb-5">ALL AVAILABLE JOBS</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={100}>
                                <a href="#" className="h-100 feature-item">
                                    <span className="d-block icon flaticon-calculator mb-3 text-primary" />
                                    <h2>Accounting / Finanace</h2>
                                    <span className="counting">10,391</span>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={200}>
                                <a href="#" className="h-100 feature-item">
                                    <span className="d-block icon flaticon-wrench mb-3 text-primary" />
                                    <h2>Automotive Jobs</h2>
                                    <span className="counting">192</span>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={300}>
                                <a href="#" className="h-100 feature-item">
                                    <span className="d-block icon flaticon-worker mb-3 text-primary" />
                                    <h2>Construction / Facilities</h2>
                                    <span className="counting">1,021</span>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={400}>
                                <a href="#" className="h-100 feature-item">
                                    <span className="d-block icon flaticon-telecommunications mb-3 text-primary" />
                                    <h2>Telecommunications</h2>
                                    <span className="counting">1,219</span>
                                </a>
                            </div>
                         
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                                <h2 className="mb-5 h3">Recent Jobs</h2>
                                <div className="rounded border jobs-wrap">

                                    {allJobs.map(job => (
                                        <JobCard title={job.jobTitle} location={job.location} role={job.role} />
                                    ))}
                                    {/* <a href="#" className="job-item d-block d-md-flex align-items-center freelance">
                                        <div className="company-logo blank-logo text-center text-md-left pl-3">
                                            <img src="images/logo_1.png" alt="Image" className="img-fluid mx-auto" />
                                        </div>
                                        <div className="job-details h-100">
                                            <div className="p-3 align-self-center">
                                                <h3>JavaScript Fullstack Developer</h3>
                                                <div className="d-block d-lg-flex">
                                                    <div className="mr-3"><span className="icon-suitcase mr-1" /> Cooper</div>
                                                    <div className="mr-3"><span className="icon-room mr-1" /> Anywhere</div>
                                                    <div><span className="icon-money mr-1" /> $55000 — 70000</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-category align-self-center">
                                            <div className="p-3">
                                                <span className="text-warning p-2 rounded border border-warning">Freelance</span>
                                            </div>
                                        </div>
                                    </a> */}
                                    {/* <a href="#" className="job-item d-block d-md-flex align-items-center freelance">
                                        <div className="company-logo blank-logo text-center text-md-left pl-3">
                                            <img src="images/logo_1.png" alt="Image" className="img-fluid mx-auto" />
                                        </div>
                                        <div className="job-details h-100">
                                            <div className="p-3 align-self-center">
                                                <h3>ReactJS Fullstack Developer</h3>
                                                <div className="d-block d-lg-flex">
                                                    <div className="mr-3"><span className="icon-suitcase mr-1" /> Cooper</div>
                                                    <div className="mr-3"><span className="icon-room mr-1" /> Anywhere</div>
                                                    <div><span className="icon-money mr-1" /> $55000 — 70000</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-category align-self-center">
                                            <div className="p-3">
                                                <span className="text-warning p-2 rounded border border-warning">Freelance</span>
                                            </div>
                                        </div>
                                    </a> */}
                                    {/* <a href="#" className="job-item d-block d-md-flex align-items-center fulltime">
                                        <div className="company-logo blank-logo text-center text-md-left pl-3">
                                            <img src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto" />
                                        </div>
                                        <div className="job-details h-100">
                                            <div className="p-3 align-self-center">
                                                <h3>Assistant Brooker, Real Estate</h3>
                                                <div className="d-block d-lg-flex">
                                                    <div className="mr-3"><span className="icon-suitcase mr-1" /> RealState</div>
                                                    <div className="mr-3"><span className="icon-room mr-1" /> New York</div>
                                                    <div><span className="icon-money mr-1" /> $55000 — 70000</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-category align-self-center">
                                            <div className="p-3">
                                                <span className="text-info p-2 rounded border border-info">Full Time</span>
                                            </div>
                                        </div>
                                    </a> */}
                                    {/* <a href="#" className="job-item d-block d-md-flex align-items-center partime">
                                        <div className="company-logo blank-logo text-center text-md-left pl-3">
                                            <img src="images/logo_2.png" alt="Image" className="img-fluid mx-auto" />
                                        </div>
                                        <div className="job-details h-100">
                                            <div className="p-3 align-self-center">
                                                <h3>Telecommunication Manager</h3>
                                                <div className="d-block d-lg-flex">
                                                    <div className="mr-3"><span className="icon-suitcase mr-1" /> Think</div>
                                                    <div className="mr-3"><span className="icon-room mr-1" /> London</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-category align-self-center">
                                            <div className="p-3">
                                                <span className="text-danger p-2 rounded border border-danger">Par Time</span>
                                            </div>
                                        </div>
                                    </a> */}
                                </div>
                                <div className="col-md-12 text-center mt-5">
                                    <Link to="/wantJob" className="btn btn-primary rounded py-3 px-5"><span className="icon-plus-circle" /> Show More Jobs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-blocks-cover overlay inner-page" style={{ backgroundImage: 'url("images/hero_1.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 text-center" data-aos="fade">
                                <h1 className="h3 mb-0">Your Dream Job</h1>
                                <p className="h3 text-white mb-5">Is Waiting For You</p>
                                <p><Link to="/wantJob" className="btn btn-outline-warning py-3 px-4">Find Jobs</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section site-block-feature bg-light">
                    <div className="container">
                        <div className="text-center mb-5 section-heading">
                            <h2>Why Choose Us</h2>
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
                                <p><a href="#">Read More <span className="icon-arrow-right small" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        isError: state.jobs.isError,
        isLoading: state.jobs.isLoading,
        successMessage: state.jobs.successMessage,
        errorMessage: state.jobs.errorMessage,
        allJobs: state.jobs.allJobs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJobs: () => {
            dispatch(JobMiddleware.getJobMiddleware())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

