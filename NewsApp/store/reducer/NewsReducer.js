const INITIAL_STATE = {
    news: [],
    filteredNews: [],
}

const newsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                news: action.payload,
                filteredNews: action.payload,
            };
        case "FILTER_NEWS":
            return {
                filteredNews: action.payload,
            }

        default:
            return state;
    }
}

export default newsReducer;