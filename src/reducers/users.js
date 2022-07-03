import { FETCH_INITIAL_DATA } from "../actions/initial"

export default (state={}, action)=>{
    switch(action.type){
        case FETCH_INITIAL_DATA:
            return action.payload.users
        default:
            return state
    }
}