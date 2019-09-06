/*eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'
import Path from '../../Config/path'
import { connect } from 'react-redux'
import * as jobMiddleware from '../../Store/middlewares/jobMiddleware'
import { message } from 'antd'

class ApplyJob extends Component {


    state = {
        email: "",
        CV: null,
        isApplying: false,
        isError: false,
        isLoading: false,
        successMessage: "",
        errorMessage: "",
    }

    handleChange = event => {
        if (event.target.name === "CV") {
            this.setState({ CV: event.target.files[0] })
        } else {
            this.setState({ email: event.target.value })
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, CV } = this.state

        var formData = new FormData();

        formData.append("candidateEmail", email)
        formData.append("CV", CV);
        formData.append("jobId", this.props.location.state._id)

        this.setState({ isLoading: true, isApplying: false })
        this.props.apply(formData)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.isError) {
            message.error(nextProps.errorMessage)

            return this.setState({
                isError: nextProps.isError,
                errorMessage: nextProps.errorMessage,
                isLoading: false,
                isApplying: false
            })
        }

        if (nextProps.successMessage.length > 1) {
            message.success(nextProps.successMessage)
            this.setState({
                isError: nextProps.isError,
                successMessage: nextProps.successMessage,
                isLoading: false,
                isApplying: false
            })

        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        if (!this.props.location.state) {
            window.location.replace('/')
        }
        const { jobTitle, jobDescription, role, location, createdAt, } = this.props.location.state
        const { email, isApplying } = this.state
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


                                    {isApplying ? (<form onSubmit={this.handleSubmit}>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="email">Enter Your Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={email}
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="font-weight-bold mt-3" htmlFor="email">Upload Your CV:</label><br />
                                                <input type="file" name="CV" id="CV" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <button type="submit" value="Apply" className="btn btn-primary">Apply</button>

                                    </form>) :
                                        <p className="mt-5">
                                            <a style={{ color: 'white' }} className="btn btn-primary  py-2 px-4" onClick={() => this.setState({ isApplying: true })} >
                                                Apply Job
                                            </a>
                                        </p>}
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


const mapStateToProps = state => {
    return {
        isError: state.jobs.isError,
        isLoading: state.jobs.isLoading,
        successMessage: state.jobs.successMessage,
        errorMessage: state.jobs.errorMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        apply: data => {
            dispatch(jobMiddleware.applyToJob(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJob)

