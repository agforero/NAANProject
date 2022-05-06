/* eslint-disable prettier/prettier */
import React from 'react';
import { Component, useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import GoToButton_Prefs_New, { GoToButton_Prefs } from '../assets/funcs/NavButtons';
import { PrefsButton } from '../assets/funcs/PrefsButtons';
import { n_colors } from '../styles/Colors';
import Arrow from 'react-native-arrow'
import { useNavigation } from '@react-navigation/native';

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

class ChangeSubd extends Component {
    disp() {
        const depts = ["Music", "Pop Culture", "Style", "Sneakers", "Sports", "General News"]
        const buttons = depts.map((dept) =>
            <PrefsButton label={dept} key={dept}/>
        );

        return (
            <ScrollView>
                <View style={styles.disp}>
                    <BackArrow target={"HamburgerLinks"}/>
                    <View style={styles.frame}>
                        <Text style={styles.header}>Which Complex subdivisions would you like to see?</Text>
                    </View>

                    <View style={styles.frame}>
                        {buttons}
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: 'black'
	},
	disp: {
		flex: 1,
        backgroundColor: n_colors.black,
		padding: 20,
        justifyContent: 'center',
        paddingLeft: 40,
        paddingTop: 20
	},
    frame: {
        marginTop: 10
    },
    header: {
        color: n_colors.white,
        fontSize: 35,
        textAlign: 'left',
        fontFamily: 'bebas',
        marginBottom: 10,
        marginTop: 10
    },
    entry_header: {
        color: "#bbbbbb",
        fontSize: 25,
        fontFamily: 'bebas',
        marginTop: 10
    },
    entry: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 20,
    },
    checkbox: {

    }
});

export default ChangeSubd;