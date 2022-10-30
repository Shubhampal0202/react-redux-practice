import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { cakeReducer } from './cake/cakeReducer'
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { postReducer } from './posts/postReducer';
import {usersReducer} from './users/usersReducer'
import { imageReducer } from './images/imagesReducer';
const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
    posts: postReducer,
    users:usersReducer,
    images:imageReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk));