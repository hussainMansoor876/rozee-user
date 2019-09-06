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


export const applyJob = () => {
    return { 
        type: actionTypes.APPLY_JOB
    }
}


export const applyJobSuccess = (data) => {
    return { 
        type: actionTypes.APPLY_JOB_SUCCESS,
        data
    }
}


export const applyJobFail = (data) => {
    return { 
        type: actionTypes.APPLY_JOB_FAIL,
        data
    }
}
