import { BUY_CAKE } from "./cakeTypes";
import { SET_VALUE } from './cakeTypes'
const initialState = {
    numOfCakes: 10,
    number: ""
}
export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - action.payload, number:"" }
        case SET_VALUE:
            return { ...state, numOfCakes: state.numOfCakes, number: action.payload }
        default:
            return state;
    }
}