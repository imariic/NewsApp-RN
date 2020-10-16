import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Article = ({ article }) => {
    return (<View style={style.container}>
        <Image style={style.image} source={{ uri: article.urlToImage }} />
        <View style={style.textContainer}>
            <Text style={style.title}>{article.title}</Text>
            <Text style={style.description}>{article.description}</Text>
        </View>
    </View>);

}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        resizeMode: 'cover',
        width: 120,
        height: 120,
        flex: 1
    },
    textContainer: {
        flex: 3,
    },
    title: {
        marginTop: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
    },
    description: {
        marginTop: 20,
        textAlign: "center"

    }

});

export default Article;