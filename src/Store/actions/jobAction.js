import * as actionTypes from "./Types";

export const getAllJobs = () => {
    return { 
        type: actionTypes.GET_ALL_JOBS
    }
}


export const getAllJobsSuccess = (data) => {
    return { 
        type: actionTypes.GET_ALL_JOBS_SUCCESS,
        data
    }
}


export const getAllJobsFail = (data) => {
    return { 
        type: actionTypes.GET_ALL_JOBS_FAIL,
        data
    }
}