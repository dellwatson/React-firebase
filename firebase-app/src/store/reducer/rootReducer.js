import { combineReducers } from "redux";
import authReducer from './authReducer';
import postReducer from './postReducer';
// import { getFirebase, getFirestore } from '../../config/fbConfig'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    // getFirebase: getFirebase,
    // getFirestore: getFirestore
})

export default rootReducer;