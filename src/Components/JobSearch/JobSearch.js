import React from 'react';
import { Drawer, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
    <div
        style={{
            fontSize: 14,
            marginBottom: 7,
            color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: 'inline-block',
                color: "black"
            }}
        >
            {title}:
      </p>
        {content}
    </div>
);

class JobSearch extends React.Component {
    state = {
        visible: false,
        INNER_WIDTH: window.innerWidth,
    };

    resize = () => {
        this.setState({ INNER_WIDTH: window.innerWidth })
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize)
    }

    static getDerivedStateFromProps(props) {
        return {
            visible: props.visible
        }

    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    handleApplyJob = (job) => {
        this.props.history.push('/applyJob', job)
    }


    render() {
        const { INNER_WIDTH, visible } = this.state
        const { jobs } = this.props
        return (
            <div>
                <Drawer
                    width={INNER_WIDTH < 600 ? "380" : "600"}
                    placement="right"
                    closable={true}
                    onClose={() => this.props.onClose(!visible)}
                    visible={this.state.visible}
                >

                    {jobs.length ? jobs.map(job => (
                        <React.Fragment>
                            <h6>{job.jobTitle}</h6>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Posted on" content={new Date(job.createdAt).toDateString()} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Role" content={job.role} />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Location" content={job.location} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Description"
                                        content={(<React.Fragment>
                                            <br /> {job.jobDescription}
                                        </React.Fragment>)}
                                    />
                                    <button style={{ float: "left", }} className="btn btn-primary" onClick={() => this.handleApplyJob(job)}>Apply to this job</button>
                                </Col>
                            </Row>
                            <Divider style={{ height: 3, backgroundColor: '#44444' }} />
                        </React.Fragment>
                    )) : <h5>No Jobs Found Please Modify Search</h5>}
                </Drawer>
            </div>
        );
    }
}

export default JobSearch