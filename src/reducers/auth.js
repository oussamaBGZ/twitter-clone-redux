import { AUTH_USER } from "../actions/auth"

export default (state=null, action)=>{
    switch(action.type){
        case AUTH_USER:
            return action.id
        default:
            return state
    }
}