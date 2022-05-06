/* eslint-disable prettier/prettier */
import React from 'react';
import { Component, useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import GoToButton_Prefs_New, { GoToButton_Prefs } from '../assets/funcs/NavButtons';
import { useNavigation } from '@react-navigation/native';
import { PrefsButton } from '../assets/funcs/PrefsButtons';
import { n_colors } from '../styles/Colors';

export function ProfilePictureButton({ target }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(target)}
        >
            <View>
                <Image 
                    style={{
                        height: 310,
                        width: '100%',
                    }} 
                    source={require("../assets/imgs/const/default_pfp.png")}
                />
            </View>
        </TouchableOpacity>
    );
}

class PrefsSelect_PreImage extends Component {
    disp() {
        const depts = ["Music", "Pop Culture", "Style", "Sneakers", "Sports", "General News"]
        const buttons = depts.map((dept) =>
            <PrefsButton label={dept} key={dept}/>
        );

        return (
            <ScrollView>
                <View style={styles.disp}>
                    <View style={styles.frame}>
                        <Text style={styles.header}>First, let's build your profile.</Text>
                            <Text style={styles.entry_header}>Profile Picture</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <ProfilePictureButton target={"PrefsSelect"}/>
                            </View>
                            <Text style={styles.entry_header}>Name</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry}
                                />
                            </View>
                            <Text style={styles.entry_header}>Username</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry}
                                />
                            </View>
                            <Text style={styles.entry_header}>Password</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry_secure}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Text style={styles.entry_header}>Confirm Password</Text>
                            <View style={{
                                borderColor: 'white',
                                borderWidth: 2,
                            }}>
                                <TextInput 
                                    style={styles.entry_secure}
                                    secureTextEntry={true}
                                />
                            </View>
                    </View>

                    <View style={styles.frame}>
                        <Text style={styles.header}>Now, pick your favorite content from Complex.</Text>
                    </View>

                    <View style={styles.frame}>
                        {buttons}
                    </View>

                    <View style={styles.frame}>
                        <GoToButton_Prefs target={"CentralHome"} desc={"continue"} states={buttons}/>
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
        marginBottom: 10
    },
    entry_header: {
        color: "#bbbbbb",
        fontSize: 25,
        fontFamily: 'bebas',
        marginTop: 10
    },
    entry: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 20,
    },
    entry_secure: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 20,
    },
    checkbox: {

    }
});

export default PrefsSelect_PreImage;