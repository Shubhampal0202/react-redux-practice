import axios from 'axios'
import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './postTypes'
const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}
const fetchPostSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}
const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export const fetchPosts = (dispatch) => {
    dispatch(fetchPostRequest())
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((responce) => {
            // console.log(responce);
            const posts = responce.data
            dispatch(fetchPostSuccess(posts))
        }).catch((error) => {
            dispatch(fetchPostFailure(error.message))
        })
}


// export const fetchPosts = () => {
//     return (dispatch) => {
//       dispatch(fetchPostRequest());
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//           const posts = response.data;
//           dispatch(fetchPostSuccess(posts));              // ck wala method
//         })
//         .catch((error) => {
//           dispatch(fetchPostFailure(error.message));
//         });
//     };
//   };