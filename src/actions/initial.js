import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData } from "../utils/api"
import { auth } from './auth'

export const FETCH_INITIAL_DATA= 'FETCH_INITIAL_DATA'
const AUTHED_ID = 'tylermcginnis'

export const fetchIntialDataAction=()=> (dispatch)=>{
    dispatch(showLoading())
    getInitialData()
    .then(payload =>{
        dispatch({type:FETCH_INITIAL_DATA, payload})
        dispatch(auth(AUTHED_ID))
        dispatch(hideLoading())
    })
}
