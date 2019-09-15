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
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/hero_2.jpg")', overflowX: 'hidden', overflow: 'hidden' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container"  >
                        <div className="row flexer">
                            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 main-heading ">
                                <h1  >DELIVERING IT SOLUTIONS <br /><p className="main-banner-text" style={{}}>Together we are dedicated in finding you the best</p></h1>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-4 main-btn">
                                <h2 className="text-white rounded" >Client Services</h2>
                                <p style={{ fontSize: '20px' }}>I am looking for candidates. </p>
                                <Link to="/servicesforclients" className="header-btn-inside mt-5 flexer" ><span className="icon-arrow-right" /></Link>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-4 col-xs-4 ml-5 main-btn-second  ">
                                <h2 className="text-white rounded" >Candidates Services</h2>
                                <p style={{ fontSize: '20px' }}>I am looking for job roles. </p>
                                <Link to="/servicesforcandidates" className="header-btn-inside mt-5 flexer" ><span className="icon-arrow-right" /></Link>
                            </div>

                            {/* <div className="col-lg-12 col-md-12 col-sm-12  " data-aos="fade">
                                <div>
                                    <span className="main-btn text-white rounded p-5" >Client Services</span>
                                </div>
                                <div>
                                    <span className="main-btn text-white rounded p-5 ">Candidates Services</span>
                                </div>
                            </div> */}
                            {/* <input type="Client Services" className="btn btn-search btn-primary btn-block" style={{fontSize:'2rem'}} defaultValue="Client Services" /> */}
                            {/* <input type="Candidates Services" className="btn btn-search btn-primary btn-block" style={{fontSize:'2rem'}} defaultValue="Candidates Services" /> */}
                            {/* <h1>Find Job</h1>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="extra-large">or browse by category: <Link to="/servicesforclients" className="category">Services for clients</Link> <Link to="/servicesforcandidates" className="category">Services for candidates</Link></p>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <input
                                                        type="text"
                                                        name="jobTitle"
                                                        value={search.jobTitle}
                                                        onChange={this.handleChange}
                                                        className="mr-3 form-control border-0 px-4"
                                                        placeholder="React Application Developer"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <div className="input-wrap">
                                                        <span className="icon icon-room" />
                                                        <input
                                                            type="text"
                                                            name="location"
                                                            value={search.location}
                                                            onChange={this.handleChange}
                                                            className="form-control form-control-block search-input border-0 px-4"
                                                            id="autocomplete"
                                                            placeholder="United Kingdom"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                                        </div>

                                    </div>

                                </form> */}

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
                                        <img src="images/hero_1.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-5 ml-auto">
                                    <div className="text-left mb-5 section-heading">
                                        <h2>About Us</h2>
                                    </div>
                                    <p className="mb-4 h5 font-italic lineheight1-5">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..”</p>
                                    <p>— <strong className="text-black font-weight-bold">John Holmes</strong>, Marketing Strategist</p>
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
                                                <a className="h-100 feature-item" onClick={() => this.handleApplyJob(job)} style={{ height: '500px', border: "solid 1px green", cursor: 'pointer' }}>
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
                {/* <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                                <h2 className="mb-5 h3">Recent Jobs</h2>
                                <div className="rounded border jobs-wrap">
                                    {isLoading && <Skeleton active />}

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
                </div> */}


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
                {/* <div className="site-blocks-cover overlay inner-page" style={{ backgroundImage: 'url("images/hero_2.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 text-center" data-aos="fade">
                                <h1 className="h3 mb-0">Your Dream Job</h1>
                                <p className="h3 text-white mb-5">Is Waiting For You</p>
                                <p><Link to="/wantJob" className="btn btn-outline-warning py-3 px-4">Find Jobs</Link></p>
                            </div>
                        </div>
                    </div>
                </div> */}
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

