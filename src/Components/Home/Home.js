
/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Path from '../../Config/path';
import JobCard from '../JobCard/JobCard';
import { connect } from 'react-redux';
import * as JobMiddleware from '../../Store/middlewares/jobMiddleware';
import Slider from 'react-slick';
import './home.css'
import ApplyJob from '../ApplyJob/ApplyJob';

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

    handleApplyJob = (job) => {
        console.log(job)
        this.props.history.push('/applyJob', job)

    }


    render() {
        var settings = {
            dots: true,
            className: 'slider',
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
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
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Slider  {...settings}>
                                    <div>
                                        {allJobs.map(job => (
                                            <div key={job._id} className="col-sm-12 col-md-12 col-lg-12" data-aos="fade-up" data-aos-delay={100} onClick={() => this.handleApplyJob(job)} >
                                                <a className="h-100 feature-item" style={{ height: '500px', border: "solid 1px green", cursor: 'pointer' }}>
                                                    <span className="d-block icon flaticon-calculator mb-3 text-primary" />
                                                    <h2>{job.jobTitle}</h2>
                                                    <span className="counting">{job.role}</span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </Slider>
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
                                        <JobCard history={this.props.history} data={job} key={job._id} title={job.jobTitle} location={job.location} role={job.role} />
                                    ))}

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

