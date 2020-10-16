import axiosInstance from "../../api/axios/axiosInstance";
import { API_URL } from "../../constants/Constants";

export const newsActionAsync = () => async dispatch => {
    try {
        let response = await axiosInstance.get(API_URL);
        dispatch(newsAction(response.data.articles));
    } catch (error) {
        console.log(error);
        dispatch(newsAction([]));
    }
}


const newsAction = news => {
    return {
        type: "GET_NEWS",
        payload: news,
    }
}

export const filterNewsAction = (searchTerm) => (dispatch, getState) => {

    dispatch({
        type: "FILTER_NEWS",
        payload: getState().news.filter(item => item.title.toLowerCase().includes(searchTerm)),
    }
    );
}