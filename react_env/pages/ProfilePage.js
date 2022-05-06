/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../styles/Colors';
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

class ProfilePage extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <ScrollView>
                    <BackArrow target={"HamburgerLinks"}/>
                    <Text style={styles.title}>AGForero</Text>
                    <Text style={styles.name}>Agustin Forero</Text>
                    <Image
                        style={styles.pfp}
                        source={require("../assets/imgs/const/best_dev.jpg")}
                    />
                    <Text style={styles.whitespace}></Text>
                    <Text style={styles.interests_header}>Interested in...</Text>
                    <Text style={styles.interest}>Complex Music 🎵</Text>
                    <Text style={styles.interest}>Complex Sneakers 👟</Text>
                    <Text style={styles.interest}>Complex Style 👔</Text>
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
        backgroundColor: 'black'
	},
	disp: {
		flex: 1,
        backgroundColor: n_colors.black,
		padding: 20,
        justifyContent: 'center'
	},
    pfp_frame: {
        
    },
    pfp: {
        height: 270,
        width: 270,
        resizeMode: 'contain',
        borderColor: 'white',
        borderWidth: 3
    },
    title: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 70
    },
    name: {
        color: '#bbbbbb',
        fontFamily: 'serif',
        fontSize: 25,
        fontStyle: 'italic',
        marginBottom: 20,
    },
    whitespace: {
        fontFamily: 'serif',
        fontSize: 15,
        fontStyle: 'italic',
        marginBottom: 20,
        borderTopColor: 'white',
        borderTopWidth: 3,
        marginTop: 20
    },
    interests_header: {
        color: '#999999',
        fontFamily: 'bebas',
        fontSize: 35
    },
    interest: {
        color: 'white',
        fontFamily: 'bebas',
        fontSize: 35
    },
});

export default ProfilePage;