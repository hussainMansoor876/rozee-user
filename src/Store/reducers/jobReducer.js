import * as actionTypes from "../actions/Types";

const initialAppState = {
    isError: false,
    isLoading: false,
    successMessage: "",
    errorMessage: "",
    allJobs: []
};

export const jobReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_JOBS:
            return {
                ...state,
                isError: false,
                successMessage: "",
                errorMessage: "",
                isLoading: true,
                allJobs: []
            };


        case actionTypes.GET_ALL_JOBS_SUCCESS:
            return {
                ...state,
                isError: false,
                successMessage: "",
                errorMessage: "",
                isLoading: false,
                allJobs: action.data.allJobs
            };

        case actionTypes.GET_ALL_JOBS_FAIL:
            return {
                ...state,
                isError: true,
                successMessage: "",
                errorMessage: action.data.errorMessage,
                isLoading: false,
                allJobs: []
            };

        case actionTypes.APPLY_JOB:
            return {
                ...state,
                isError: false,
                successMessage: "",
                errorMessage: "",
                isLoading: true,
            };


        case actionTypes.APPLY_JOB_SUCCESS:
            return {
                ...state,
                isError: false,
                successMessage: action.data.successMessage,
                errorMessage: "",
                isLoading: false,
            };

        case actionTypes.APPLY_JOB_FAIL:
            return {
                ...state,
                isError: true,
                successMessage: "",
                errorMessage: action.data.errorMessage,
                isLoading: false,
            };

        case actionTypes.UPLOAD_CV:
            return {
                ...state,
                isError: false,
                successMessage: "",
                errorMessage: "",
                isLoading: true,
            };


        case actionTypes.UPLOAD_CV_SUCCESS:
            return {
                ...state,
                isError: false,
                successMessage: action.data.successMessage,
                errorMessage: "",
                isLoading: false,
            };

        case actionTypes.UPLOAD_CV_FAIL:
            return {
                ...state,
                isError: true,
                successMessage: "",
                errorMessage: action.data.errorMessage,
                isLoading: false,
            };

        default:
            return state;
    }
};
