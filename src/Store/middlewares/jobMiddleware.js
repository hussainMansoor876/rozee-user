import { getAllJobs, getAllJobsFail, getAllJobsSuccess } from '../actions/jobAction'
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