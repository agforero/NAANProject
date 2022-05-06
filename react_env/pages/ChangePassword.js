/* eslint-disable prettier/prettier */
import React from 'react';
import { Component, useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import GoToButton_Prefs_New, { GoToButton_Prefs } from '../assets/funcs/NavButtons';
import { PrefsButton } from '../assets/funcs/PrefsButtons';
import { n_colors } from '../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import Arrow from 'react-native-arrow'

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

class ChangePassword extends Component {
    disp() {
        const depts = ["Music", "Pop Culture", "Style", "Sneakers", "Sports", "General News"]
        const buttons = depts.map((dept) =>
            <PrefsButton label={dept} key={dept}/>
        );

        return (
            <ScrollView>
                <View style={styles.disp}>
                    <View style={styles.frame}>
                        <BackArrow target={"HamburgerLinks"}/>
                        <Text style={styles.header}>Change your password</Text>
                            <Text style={styles.entry_header}>Old password</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Text style={styles.entry_header}>New password</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Text style={styles.entry_header}>Confirm new password</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry}
                                    secureTextEntry={true}
                                />
                            </View>
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
        fontSize: 40,
        textAlign: 'left',
        fontFamily: 'bebas',
        marginBottom: 10,
        marginTop: 15
    },
    entry_header: {
        color: "#bbbbbb",
        fontSize: 25,
        fontFamily: 'bebas',
        marginTop: 10,
    },
    entry: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 20,
    },
    checkbox: {

    }
});

export default ChangePassword;