/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { n_colors } from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { Central_Grey, Central_White } from '../../assets/funcs/NavButtons';
import { FeaturedPictureButton } from '../../assets/funcs/ClickablePictures'
let articles = require('../../assets/articles/complex_scrape.json');

function Article({ title, img_url, subd }) {
    return (
        <View style={{flexDirection: 'column'}}>
            <View>
                <Image 
                    style={styles.featured_img} 
                    source={{uri: img_url, method: 'GET'}}
                />
            </View>
            <View>
                <Text style={styles.featured_title}>{title}</Text>
            </View>
        </View>
    );
}

class ComplexSneakersPage extends Component {
    disp() {
        const articles_list = articles.sneakers.map((art) =>
            <View style={styles.basic_view} key={art.id}>
                <View style={styles.basic_view_col_left} key={art.id}>
                    <Article
                        subd={art.subdivision}
                        title={art.title}
                        img_url={art.img_url}
                        key={art.id}
                    />
                </View>
            </View>
        );

        return (
            <View style={styles.disp}>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.mainheader}>
                                COMPLEX SNEAKERS
                            </Text>
                        </View>
                    </View>
                    <View>
                        {articles_list}
                    </View>
                </ScrollView>
			</View>
        );
    }

	render() {
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
    mainheader: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 50,
        textAlign: 'left',
        flex: 1
    },
    featured_subdivision: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 40
    },
    featured_img: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 3,
        borderColor: 'white',
    },
    featured_title: {
        fontSize: 20,
        fontFamily: 'serif',
        textAlign: 'left',
        color: 'white',
    },
    basic_view: {
        flexDirection: 'row',
        marginTop: 20
    },
    basic_view_col_left: {
        flex: 1,
        marginRight: 10
    },
    basic_view_col_right: {
        flex: 1,
        marginLeft: 10
    },
    basic_subdivision: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 25
    },
    basic_img: {
        //height: 70,
        //width: 140,
        height: 100,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 3,
        borderColor: 'white',
    },
    basic_title: {
        fontSize: 15,
        fontFamily: 'serif',
        textAlign: 'left',
        color: 'white',
    },
});

export default ComplexSneakersPage;