import {
    FETCH_IMAGE_FAILURE,
    FETCH_IMAGE_REQUEST,
    FETCH_IMAGE_SUCCESS,
  } from "./imagesType";
  
  const initialState = {
    loading: false,
    images: [],
    error: "",
  };
  
  export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGE_REQUEST:
        return { ...state, loading: true };
      case FETCH_IMAGE_SUCCESS:
        return { loading: false, images: action.payload, error: "" };
      case FETCH_IMAGE_FAILURE:
        return { loading: false, images: [], error: action.payload };
      default:
        return state;
    }
  };
  