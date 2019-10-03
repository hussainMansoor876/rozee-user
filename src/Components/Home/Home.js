/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';
import { connect } from 'react-redux';
import * as JobMiddleware from '../../Store/middlewares/jobMiddleware';
import Slider from 'react-slick';
import './Home.css'
import JobSearch from '../JobSearch/JobSearch'
import { Skeleton } from 'antd';


class Home extends Component {
    state = {
        isError: false,
        isLoading: true,
        successMessage: "",
        errorMessage: "",
        allJobs: [],
        search: {
            jobTitle: "",
            location: ""
        },

        visible: false,
        filteredJobs: [],
        INNER_WIDTH: window.innerWidth
    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.getJobs();

        window.addEventListener('resize', () => {
            var newWidth = window.innerWidth;
            this.setState({ INNER_WIDTH: newWidth })
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.isError && nextProps.errorMessage.length > 1) {
            return this.setState({
                isLoading: false,
                isError: nextProps.isError,
                errorMessage: nextProps.errorMessage
            })
        }

        if (nextProps.allJobs.length) {
            const allJobs = nextProps.allJobs.splice(0, 10, nextProps.allJobs.length);
            this.setState({
                isLoading: false,
                isError: false,
                errorMessage: "",
                allJobs: [...allJobs]
            })

        }


    }

    handleApplyJob = (job) => {
        this.props.history.push('/applyJob', job)
    }

    handleChange = event => {
        const { search } = this.state
        search[event.target.name] = event.target.value
        this.setState({ search })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { search, allJobs } = this.state
        const filtered = allJobs.filter(item =>
            item.jobTitle.toLowerCase().includes(search.jobTitle.toLowerCase()) &&
            item.location.toLowerCase().includes(search.location.toLowerCase())
        );

        this.setState({ filteredJobs: filtered, visible: true })
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                        arrows: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        dots: true,
                        arrows: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: true
                    }
                }
            ]
        };


        const { allJobs, filteredJobs, search, isLoading } = this.state
        return (
            <div className="site-wrap">
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/landing.jpg")', overflowX: 'hidden', overflow: 'hidden' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container" >
                        <div className="row flexer-space">

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 main-heading ">
                                <h1  >DELIVERING IT SOLUTIONS <br /><h4 className="main-banner-text" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '2.5rem' }}>Together we are dedicated to finding you the best</h4></h1>

                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-4 main-btn">
                                <h2 className="text-white rounded" >Client Services</h2>
                                <p style={{ fontSize: '20px' }}>I am looking for candidates. </p>
                                <Link to="/servicesforclients" className="header-btn-inside mt-5 flexer" ><span className="icon-arrow-right" /></Link>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-4 col-xs-4 main-btn-second">
                                <h2 className="text-white rounded" >Candidate Services</h2>
                                <p style={{ fontSize: '20px' }}>I am looking for job roles. </p>
                                <Link to="/servicesforcandidates" className="header-btn-inside-second mt-5 flexer" ><span className="icon-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <JobSearch history={this.props.history} jobs={filteredJobs} onClose={this.onClose} visible={this.state.visible} />

                <div className="site-wrap">
                    <div className="site-section" data-aos="fade">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="img-border">
                                        <img src="images/aboutus2.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-5 ml-auto">
                                    <div className="text-left mb-5 section-heading">
                                        <h2>About Us</h2>
                                    </div>
                                    <p className="mb-4 h5 font-italic lineheight1-5">247 IT International is an expert-level IT recruitment company motivated by the rapid global growth of the technology based industry. We specialise in the placement of IT based roles to top organisations across the world, from start-ups to blue-chip companies. </p>
                                    <p><Link to="/about" className="btn btn-primary pill text-white px-4" style={{ float: "right" }} >Find out more</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                                <h2 className="mb-5">RECENT JOBS</h2>
                            </div>

                            <Skeleton active loading={isLoading}>
                                <div className="col-lg-12 col-md-12 col-sm-12 px-4"  >
                                    <Slider  {...settings}>
                                        {allJobs.map(job => (
                                            <div key={job._id} className="col-sm-12 col-md-12 col-lg-12" data-aos="fade-up" data-aos-delay={100}  >
                                                <a className="h-100 feature-item" onClick={() => this.handleApplyJob(job)} style={{ height: '500px', border: "solid 1px blue", cursor: 'pointer' }}>
                                                    <span className="d-block icon flaticon-calculator mb-3 text-primary" />
                                                    <h2>{job.jobTitle}</h2>
                                                    <span className="counting">{job.role}</span>
                                                </a>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Skeleton>
                        </div>
                    </div>
                </div>

                <div className="site-section site-block-feature bg-light">
                    <div className="container">
                        <div className="text-center mb-5 section-heading">
                            <h2>Why Choose Us</h2>
                        </div>
                        <div className="d-block d-md-flex border-bottom" style={{ width: '100%' }}>
                            <div className="text-center p-4 item border-right" data-aos="fade" style={{ width: '100%' }}>
                                {/* <span className="flaticon-worker display-3 mb-3 d-block text-primary" /> */}
                                {/* <h2 className="h4">ADD LOGO HERE</h2> */}
                                <p style={{ fontSize: '20px' }}  >
                                    Our teams specialize within their technological and geographical fields, allowing them to work together in teams to fulfil client’s requirements, even for the most niche and in-demand skills.
                                </p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade" style={{ width: '100%' }}>
                                {/* <span className="flaticon-wrench display-3 mb-3 d-block text-primary" /> */}
                                {/* <h2 className="h4">ADD LOGO HERE</h2> */}
                                <p style={{ fontSize: '20px' }} >
                                    We deliver our clients well-matched candidates within 24 hours at the most competitive rates on the market thanks to our extensive and growing network.
                                </p>
                            </div>
                        </div>
                        <div className="d-block d-md-flex" style={{ width: '100%' }}>
                            <div className="text-center p-4 item border-right" data-aos="fade" style={{ width: '100%' }}>
                                {/* <span className="flaticon-stethoscope display-3 mb-3 d-block text-primary" /> */}
                                {/* <h2 className="h4">ADD LOGO HERE</h2> */}
                                <p style={{ fontSize: '20px' }} >
                                    Our internal sourcing and recruiting team aim to make our client’s search easier, by using the most up-to-date resources and techniques, which are constantly revised and improved.
                                </p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade" style={{ width: '100%' }}>
                                {/* <span className="flaticon-calculator display-3 mb-3 d-block text-primary" /> */}
                                {/* <h2 className="h4">ADD LOGO HERE</h2> */}
                                <p style={{ fontSize: '20px' }} >
                                    247 IT International is set to grow significantly over the upcoming years as a result of our re-investments back into our people and resources.
                                </p>
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

