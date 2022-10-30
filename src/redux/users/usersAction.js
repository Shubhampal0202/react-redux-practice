import axios from 'axios';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './usersTypes';
const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USER_REQUEST,
        payload: error
    }
}

export const fetchUsers = (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((responce) => {
            const users = responce.data
            dispatch(fetchUsersSuccess(users))
        }).catch((error) => {
            dispatch(fetchUsersFailure(error.message))
        })
}