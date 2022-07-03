import { FETCH_INITIAL_DATA } from "../actions/initial"
import { ADD_TWEET, TOGGLE_HEART } from "../actions/tweets"


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INITIAL_DATA:
            return action.payload.tweets
        case TOGGLE_HEART:
            return {
                ...state,
                [action.info.id]:
                {
                    ...state[action.info.id],
                    likes: action.info.hasLiked ?
                        [...state[action.info.id].likes, action.info.authedUser] :
                        state[action.info.id].likes.filter(el => el !== action.info.authedUser)
                }
            }

        case ADD_TWEET:
            const { payload } = action

            let replyingTo = {}
            if (payload.replyingTo !== null) {
                replyingTo = {
                    [payload.replyingTo]: {
                        ...state[payload.replyingTo],
                        replies: state[payload.replyingTo].replies.concat([payload.id])
                    }
                }
            }

            return {
                ...state,
                [payload.id]: payload,
                ...replyingTo
            }
        default:
            return state

    }
}