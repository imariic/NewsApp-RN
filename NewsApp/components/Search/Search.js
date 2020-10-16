import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Search = props => {

    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        props.filterArticles(searchParam)
    }, [searchParam]);

    return (<View style={style.container}>
        <TextInput placeholder="Search" placeholderTextColor="red" value={searchParam} onChangeText={text => setSearchParam(text)} style={style.textInput} />
    </View>)
}

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 3
    },
    textInput: {
        height: 30,
        borderWidth: 1,
        borderColor: "red",

    }
});



export default Search;