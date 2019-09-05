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

        default:
            return state;
    }
};
