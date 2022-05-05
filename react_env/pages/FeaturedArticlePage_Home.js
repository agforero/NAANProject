/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { GoToButton_NoArrow } from '../assets/funcs/NavButtons';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../styles/Colors';
import Arrow from 'react-native-arrow'
let articles = require('../assets/articles/int_complex_scrape.json');

function BackArrow({target}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(target)}>
            <Arrow 
                style={styles.arrow}
                size={25}
                color={'white'}
            />
        </TouchableOpacity>
    );
}

class FeaturedArticlePage_Central extends Component {
    disp() {
        const loadInBrowser = () => {
            Linking.openURL(articles.int_featured.url).catch(err => console.error("Couldn't load page", err));
        };
        
        return (
            <View style={styles.disp}>
                <ScrollView>
                    <View>
                        <BackArrow target={"CentralHome"}/>
                        <Text style={styles.subd}>COMPLEX {articles.int_featured.subdivision}</Text>
                        <Text style={styles.title}>{articles.int_featured.title}</Text>
                        <Image
                            resizeMethod='resize'
                            style={styles.img}
                            source={{uri: articles.int_featured.img_url, method: 'GET'}}
                        />
                        <Text style={styles.author}>by {articles.int_featured.author}</Text>
                        <Text style={styles.body}>
                            {articles.int_featured.desc}
                            <Text 
                                style={styles.read_more}
                                onPress={loadInBrowser}
                            > Read more...</Text>
                        </Text>
                    </View>
                </ScrollView>
			</View>
        );
    }

	render(route, navigation) {
        //const article_params = route.params;
		return (
			<View style={styles.main}>
				{this.disp()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flexDirection: 'column',
		flex: 1,
	},
	disp: {
		flex: 1,
        backgroundColor: n_colors.black,
		padding: 20,
        justifyContent: 'center'
	},
    arrow: {

    },
    subd: {
        fontFamily: 'bebas',
        fontSize: 30,
        color: "#bbbbbb",
        marginTop: 10
    },
    title: {
        fontFamily: 'bebas',
        fontSize: 50,
        color: "#ffffff",
    },
    img: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 10
    },
    author: {
        fontFamily: 'serif',
        fontSize: 16,
        color: "#bbbbbb",
        fontStyle: 'italic',
        marginTop: 5
    },
    body: {
        fontFamily: 'serif',
        fontSize: 18,
        color: "#ffffff",
        marginTop: 10
    },
    read_more: {
        fontFamily: 'serif',
        fontSize: 18,
        color: "#bbbbbb",
        marginTop: 10,
        fontStyle: 'italic'
    }
});

export default FeaturedArticlePage_Central;