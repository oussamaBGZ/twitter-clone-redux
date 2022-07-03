import { combineReducers } from "redux";
import tweets from "../reducers/tweets";
import users from "../reducers/users";
import auth from "../reducers/auth";

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    tweets,
    users,
    auth,
    loadingBar: loadingBarReducer,

})