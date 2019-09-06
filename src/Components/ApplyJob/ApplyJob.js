/*eslint-disable */

import React, { Component } from 'react'


class ApplyJob extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)

    }



    render() {
        if (!this.props.location.state) {
            window.location.replace('/')
        }
        const { jobTitle, jobDescription, role, location, createdAt } = this.props.location.state
        // console.log(jobTitle, jobDescription, role, location, createdAt )
        return (
            <div className="site-wrap">
                <div style={{ height: '113px' }} />
                <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_2.jpg")' }}>
                    <div className="container text-center">
                        <h2 className="mb-0">{jobTitle}</h2>
                        <p className="mb-0 unit-6"><a>Home</a> <span className="sep">&gt;</span> <span>Job Item</span></p>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                <div className="p-5 bg-white">
                                    <div className="mb-4 mb-md-5 mr-5">
                                        <div className="job-post-item-header d-flex align-items-center">
                                            <h2 className="mr-3 text-black h4">{jobTitle}</h2>
                                            <div className="badge-wrap">
                                                <span className="border border-warning text-warning py-2 px-4 rounded">{role}</span>
                                            </div>
                                        </div>
                                        <div className="job-post-item-body d-block d-md-flex">
                                            <div className="mr-3"><span className="fl-bigmug-line-portfolio23" /> <a >{new Date(createdAt).toDateString()}</a></div>
                                            <div><span className="fl-bigmug-line-big104" /> <span>{location}</span></div>
                                        </div>
                                    </div>
                                    <p>{jobDescription}</p>
                                    <p className="mt-5"><a style={{color:'white'}} className="btn btn-primary  py-2 px-4">Apply Job</a></p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">More Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplyJob
