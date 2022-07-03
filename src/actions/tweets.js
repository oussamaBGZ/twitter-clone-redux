import { saveLikeToggle, saveTweet } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const TOGGLE_HEART ="TOGGLE_HEART"
export const ADD_TWEET ="ADD_TWEET"

export const toggleHeart = (info) => (dispatch)=>{
    dispatch(showLoading())

    saveLikeToggle(info)
    .then(payload =>{
        dispatch({
            type:TOGGLE_HEART,
            info
        })
        dispatch(hideLoading())

    })
}


export const saveTweetAction = (info)=> (dispatch) =>{
    dispatch(showLoading())

    return saveTweet(info)
    .then(payload =>{
        dispatch({
            type:ADD_TWEET,
            payload
        })
        dispatch(hideLoading())

    })
}