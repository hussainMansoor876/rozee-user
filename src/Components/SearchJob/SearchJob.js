import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as JobMiddleware from '../../Store/middlewares/jobMiddleware';
import JobSearch from '../JobSearch/JobSearch'

class SearchJob extends Component {
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
        this.setState({
            isLoading: false,
            isError: false,
            errorMessage: "",
            allJobs: nextProps.allJobs
        })


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
        const { filteredJobs, search } = this.state

        return (
            <div className="site-wrap">
                {/* <div style={{ height: '113px' }} /> */}
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/jobsearch.jpg")', overflow: 'hidden' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className=" col-md-12" data-aos="fade">
                                <h1>Find Job</h1>

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
                                            <input style={{ height: '60px' }} type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <JobSearch history={this.props.history} jobs={filteredJobs} onClose={this.onClose} visible={this.state.visible} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchJob)