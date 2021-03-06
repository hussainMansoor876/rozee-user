/*eslint-disable */
import React from 'react'

class JobCard extends React.Component {


    applyJob = (data) => {
        console.log(this.props)
        this.props.history.push('/applyJob', data)
    }
    render() {
        const roles = {
            FREELANCE: "Freelance",
            PERMANENT: 'Permanent'
        }

        const { title, location, role,data } = this.props
        return (
            <a
                style={{ cursor: "pointer" }}
                className={`job-item d-block d-md-flex align-items-center border-bottom ${role === roles.FREELANCE ? 'fulltime' : 'partime'} `}
                onClick={() => this.applyJob(data)}

            >
                <div className="company-logo blank-logo text-center text-md-left pl-3">
                    <img src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto" />
                </div>
                <div className="job-details h-100">
                    <div className="p-3 align-self-center">
                        <h3>{title}</h3>
                        <div className="d-block d-lg-flex">
                            {/* <div className="mr-3"><span className="icon-suitcase mr-1" /> Resto Bar</div> */}
                            <div className="mr-3"><span className="icon-room mr-1" /> {location}</div>
                            {/* <div><span className="icon-money mr-1" /> $55000 — 70000</div> */}
                        </div>
                    </div>
                </div>
                <div className="job-category align-self-center">
                    <div className="p-3">
                        {role === roles.FREELANCE ? <span className="text-info p-2 rounded border border-info">{role}</span> :
                            <span className="text-danger p-2 rounded border border-danger">{role}</span>
                        }
                    </div>
                </div>
            </a>

        )
    }
}


export default JobCard
