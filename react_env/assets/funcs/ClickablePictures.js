/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export function FeaturedPictureButton({ target, img_url, article_params }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(target, {
                params: article_params
            })}
        >
            <View style={{flexDirection: 'row'}}>
                <Image 
                    style={styles.featured_img} 
                    source={{uri: img_url, method: 'GET'}}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    featured_img: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 3,
        borderColor: 'white',
    }
})