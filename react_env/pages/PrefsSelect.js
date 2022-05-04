/* eslint-disable prettier/prettier */
import React from 'react';
import { Component, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GoToButton_Prefs } from '../assets/funcs/NavButtons';
import { PrefsButton } from '../assets/funcs/PrefsButtons';
import { n_colors } from '../styles/Colors';

class PrefsSelect extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <View>
                    <Text style={styles.header}>First, pick your favorite content from Complex.</Text>
                </View>

                <View>
                    <PrefsButton label={"Music"}/>
                    <PrefsButton label={"Pop Culture"}/>
                    <PrefsButton label={"Style"}/>
                    <PrefsButton label={"Sneakers"}/>
                    <PrefsButton label={"Sports"}/>
                    <PrefsButton label={"General News"}/>
                </View>

                <View>
                    <GoToButton_Prefs target={"FirstPage"} desc={"continue"}/>
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
        justifyContent: 'center',
        paddingLeft: 40
	},
    header: {
        color: n_colors.white,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: 'serif',
        marginBottom: 10
    },
    checkbox: {

    }
});

export default PrefsSelect;