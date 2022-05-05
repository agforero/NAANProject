/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { n_colors } from '../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { Central_Grey, Central_White } from '../assets/funcs/NavButtons';
import { FeaturedPictureButton } from '../assets/funcs/ClickablePictures'
let articles = require('../assets/articles/int_complex_scrape.json');

function FeaturedArticle({ title, img_url, subd }) {
    return (
        <View style={{flexDirection: 'column'}}>
            <View>
                <Text style={styles.featured_subdivision}>{subd}</Text>
            </View>
            <View>
                <FeaturedPictureButton
                    target={"FeaturedArticlePage_Home"}
                    img_url={img_url}
                />
            </View>
            <View>
                <Text style={styles.featured_title}>{title}</Text>
            </View>
        </View>
    );
}

function BasicArticle({ title, img_url, subd }) {
    return (
        <View style={{flexDirection: 'column'}}>
            <View>
                <Text style={styles.basic_subdivision}>{subd}</Text>
            </View>
            <View>
                <Image 
                    resizeMethod='resize'
                    style={styles.basic_img}
                    source={{uri: img_url, method: 'GET'}}
                />
            </View>
            <View>
                <Text style={styles.basic_title}>{title}</Text>
            </View>
        </View>
    );
}

function createGroups(arr) {
    const perGroup = 2;
    const numGroups = Math.floor(arr.length / 2)
    return new Array(numGroups)
        .fill('')
        .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

class CentralHome extends Component {
    disp() {
        const basicArticles = createGroups(articles.int).map(([art1, art2]) =>
            <View style={styles.basic_view} key={art1.id}>
                <View style={styles.basic_view_col_left} key={art1.id}>
                    <BasicArticle
                        subd={art1.subdivision}
                        title={art1.title}
                        img_url={art1.img_url}
                        key={art1.id}
                    />
                </View>
                <View style={styles.basic_view_col_right} key={art2.id}>
                    <BasicArticle
                        subd={art2.subdivision}
                        title={art2.title}
                        img_url={art2.img_url}
                        key={art2.id}
                    />
                </View>
            </View>
        );

        return (
            <View style={styles.disp}>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Central_White
                                target={"CentralHome"}
                                desc={"FOR YOU"}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <Central_Grey
                                target={"CentralExplore"}
                                desc={"EXPLORE"}
                            />
                        </View>
                    </View>
                    <View>
                        <FeaturedArticle
                            subd={articles.int_featured.subdivision}
                            title={articles.int_featured.title}
                            img_url={articles.int_featured.img_url}
                        />
                    </View>
                    <View>
                        {basicArticles}
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
        fontSize: 66,
        textAlign: 'left',
        flex: 1
    },
    mainheader_unselected: {
        color: '#555555',
        fontFamily: 'bebas',
        fontSize: 66,
        textAlign: 'right',
        flex: 1
    },
    featured_subdivision: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 40,
    },
    featured_img: {
        height: 200,
        width: '100%',
        resizeMode: 'resize',
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

export default CentralHome;