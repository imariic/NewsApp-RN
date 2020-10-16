
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import axiosInstance from "./api/axios/axiosInstance";
import { API_URL } from "./constants/Constants";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import movieReducer from "./store/reducer/NewsReducer";
import { newsActionAsync } from "./store/actions/NewsActions";
import NewsList from "./components/NewsList/NewsList";

const store = createStore(movieReducer, applyMiddleware(thunk));


const App: () => React$Node = () => {

  useEffect(() => {
    store.dispatch(newsActionAsync());
  }, []);

  return (

    <SafeAreaView>
      <Provider store={store}>
        <NewsList />
      </Provider>
    </SafeAreaView >

  );
};



export default App;
