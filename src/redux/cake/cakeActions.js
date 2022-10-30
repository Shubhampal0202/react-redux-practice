import { BUY_CAKE, SET_VALUE } from './cakeTypes'
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
export const setValue = (number) => {
    return {
        type: SET_VALUE,
        payload:number
    }
}
