import axios from "axios";
import {
    FETCH_IMAGE_FAILURE,
    FETCH_IMAGE_REQUEST,
    FETCH_IMAGE_SUCCESS,
} from "./imagesType";

const fetchImageRequest = () => {
    return { type: FETCH_IMAGE_REQUEST };
};

const fetchImageSuccess = (images) => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        payload: images,
    };
};

const fetchImageFailure = (error) => {
    return {
        type: FETCH_IMAGE_FAILURE,
        payload: error,
    };
};
export const fetchImages = (dispatch) => {
    dispatch(fetchImageRequest());
    axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            const images = response.data;
            console.log(images)
            dispatch(fetchImageSuccess(images));
        })
        .catch((error) => {
            dispatch(fetchImageFailure(error.message));
        });
}