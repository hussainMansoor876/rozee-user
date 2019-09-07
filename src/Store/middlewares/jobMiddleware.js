import { getAllJobs, getAllJobsFail, getAllJobsSuccess, applyJobFail, applyJobSuccess } from '../actions/jobAction'
import axios from 'axios'
import Path from '../../Config/path';

export const getJobMiddleware = () => {
    return dispatch => {
        dispatch(getAllJobs());
        axios.post(Path.GET_ALL_JOBS)
            .then(response => {
                if (!response.data.success) {
                    return dispatch(getAllJobsFail({ success: false, errorMessage: response.data.message }))
                }

                dispatch(getAllJobsSuccess({ success: true, allJobs: response.data.jobs }))
            })
            .catch(err => {
                return dispatch(getAllJobsFail({ success: false, errorMessage: "Something went wrong please try again later" }))
            })
    }
}


export const applyToJob = data => {
    return dispatch => {
        dispatch(getAllJobs());
        axios.post(Path.APPLY_JOB, data)
            .then(response => {

                if (!response.data.success) {
                    return dispatch(applyJobFail({ success: false, errorMessage: response.data.message }))
                }

                dispatch(applyJobSuccess({ success: true, successMessage: response.data.message }))
            })
            .catch(err => {
                return dispatch(applyJobFail({ success: false, errorMessage: "Something went wrong please try again later" }))
            })

    }
}