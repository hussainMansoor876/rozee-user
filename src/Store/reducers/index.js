import {combineReducers} from 'redux'
import { jobReducer } from './jobReducer';

export const rootReducer  = combineReducers({ 
    jobs: jobReducer
})