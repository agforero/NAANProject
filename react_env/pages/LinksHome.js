/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { GoToButton } from '../assets/funcs/NavButtons';
import { n_colors } from '../styles/Colors';

class LinksHome extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <View>
                    <Text style={styles.body}>Links Home</Text>
                    <GoToButton target={"FirstPage"} desc={"return home"}/>
                </View>
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
    body: {
        color: n_colors.white,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'serif'
    },
    logo: {
        height: 100,
        width: '100%',
        resizeMode: 'contain',
    },
    swipetobegin: {
        color: n_colors.white,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'serif',
        fontStyle: 'italic'
    }
});

export default LinksHome;