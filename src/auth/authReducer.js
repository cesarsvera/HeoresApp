import { types } from "../types/type";

// const state = {
//     name: 'Cesar',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:

            return {
                ...action.payload,
                logged: true
            }

        case types.logout:

        return{
            logged: false

        }

        default:
            return state
    }
}