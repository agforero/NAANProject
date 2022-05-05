/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function FeaturedArticle({ title, img_url }) {
    var img_url = {img_url}
    return (
        <View style={{flexDirection: 'column'}}>
            <View>
                <Image style={styles.featured_img} source={{uri: {img_url}}}/>
            </View>
            <View>
                <Text style={styles.featured_title}>{title}</Text>
            </View>

        </View>

        
    );
}

const styles = StyleSheet.create({
    featured_img: {
        //height: 70,
        //width: 140,
        height: 170,
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
    }
})

export default FeaturedArticle;