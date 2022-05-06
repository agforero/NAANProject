/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoToButton_Right } from '../assets/funcs/NavButtons';
import { n_colors } from '../styles/Colors';
import { BackArrow } from './FeaturedArticlePage_Explore';
let groups = require('../assets/groups/groups_random.json')

class CreateGroup extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <View>
                    <ScrollView>
                        <BackArrow target={"HamburgerLinks"}/>
                        <TextInput 
                            placeholderTextColor={'#999999'}
                            placeholder="Complex Subdivision"
                            style={styles.subd}
                        />
                        <TextInput
                            placeholderTextColor={'#999999'}
                            placeholder="Title of Group"
                            style={styles.header}
                            multiline
                        />
                        <TextInput
                            placeholderTextColor={'#999999'}
                            placeholder="Group description"
                            style={styles.info}
                            multiline
                        />
                        <View style={{alignItems: 'flex-end', marginTop: 40}}>
                            <GoToButton_Right target={"CreateGroup_Submitted"} desc={"submit Link creation request"}/>
                        </View>
                    </ScrollView>
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
        backgroundColor: 'black'
	},
	disp: {
		flex: 1,
        backgroundColor: n_colors.black,
		padding: 20,
        justifyContent: 'center'
	},
    header: {
        color: n_colors.white,
        fontSize: 50,
        textAlign: 'left',
        fontFamily: 'bebas'
    },
    subheader: {
        color: '#bbbbbb',
        fontSize: 30,
        fontFamily: 'bebas'
    },
    logo: {
        height: 100,
        width: '100%',
        resizeMode: 'contain',
    },
    subd_banner: {
        padding: 5,
        marginTop: 20
    },
    subd: {
        fontSize: 25,
        fontFamily: 'bebas',
        color: '#bbbbbb',
        marginTop: 10
    },
    title_banner: {
        backgroundColor: 'white',
        padding: 5
    },
    title: {
        fontSize: 40,
        fontFamily: 'bebas',
        color: 'black'
    },
    info_banner: {
        borderColor: 'white',
        borderWidth: 3,
        padding: 5
    },
    info: {
        fontSize: 15,
        fontFamily: 'serif',
        color: 'white',
        marginBottom: 5,
        marginTop: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    members_total: {
        fontSize: 15,
        fontFamily: 'serif',
        color: "#bbbbbb",
        fontStyle: 'italic',
        paddingBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    members_bullet: {
        fontSize: 15,
        fontFamily: 'serif',
        color: "white",
    },
    members_online: {
        fontSize: 15,
        fontFamily: 'serif',
        color: "#00ee00",
        fontStyle: 'italic'
    },
    message_frame: {
        flexDirection: 'row',
        marginTop: 15
    },
    message_img: {
        height: 65,
        width: 65,
        resizeMode: 'contain',
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 14
    },
    message_text: {
        flex: 4, 
        flexDirection: "column",
        margin: 10,
        marginTop: 10
    },
    input_text: {
        flex: 4, 
        flexDirection: "column",
        margin: 10,
        marginTop: 10,
    },
    message_user: {
        fontSize: 18,
        fontFamily: 'bebas',
        color: "#bbbbbb",
    },
    message_body: {
        fontSize: 14,
        fontFamily: 'serif',
        color: 'white'
    },
});

export default CreateGroup;