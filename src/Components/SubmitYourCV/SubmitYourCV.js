import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Path from '../../Config/path'
import { connect } from 'react-redux'
import * as jobMiddleware from '../../Store/middlewares/jobMiddleware'
import { message } from 'antd'

export class SubmitYourCV extends Component {


    state = {
        name: "",
        CV: null,
        isError: false,
        isLoading: false,
        successMessage: "",
        errorMessage: "",
    }

    handleChange = event => {
        if (event.target.name === "CV") {
            this.setState({ CV: event.target.files[0] })
        } else {
            this.setState({ name: event.target.value })
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { name, CV } = this.state

        var formData = new FormData();

        formData.append("candidateName", name)
        formData.append("CV", CV);

        this.setState({ isLoading: true})
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
                name:"",
                CV:""
            })

        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { name } = this.state

        return (
            <div className="site-wrap">
                <div style={{ height: '113px' }} />
                <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
                    <div className="container text-center">
                        <h2 className="mb-0">Submit Your CV</h2>
                        <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Submit Your CV</span></p>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="name">Enter Your Name</label>
                                            <input
                                                type="name"
                                                id="name"
                                                name="name"
                                                value={name}
                                                className="form-control"
                                                placeholder="Enter your name"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="font-weight-bold mt-3" htmlFor="name">Upload Your CV:</label><br />
                                            <input
                                                type="file"
                                                name="CV"
                                                id="CV"
                                                accept="application/msword,application/pdf,.docx,"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" value="Apply" className="btn btn-primary">Submit</button>

                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">More Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                                    <p><a className="btn btn-primary px-4 py-2 text-white pill">Learn More</a></p>
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
            dispatch(jobMiddleware.uploadCV(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitYourCV)
