import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import Article from "../Article/Article";
import Search from "../Search/Search";

const NewsList = props => {
    const [localNews, setLocalNews] = useState([]);

    useEffect(() => {
        setLocalNews(props.news);
    }, [props.news]);

    const filterArticles = text => {
        setLocalNews(props.news.filter(item => item.title.toLowerCase().includes(text.toLowerCase())));
    }

    return <View>
        <Search filterArticles={filterArticles} />
        <FlatList data={localNews} renderItem={({ item }) => <Article article={item} />
        } keyExtractor={(item) => item.title} extraData={localNews} />
    </View>;
}

const mapStateToProps = state => {
    return {
        news: state.news,
        filteredNews: state.filteredNews,
    }
}

export default connect(mapStateToProps)(NewsList);