/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoToButton } from '../assets/funcs/NavButtons';
import { n_colors } from '../styles/Colors';

function SubdivisionClickable({target, subd}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(target)}>
            <Text style={styles.point}>{subd}</Text>
        </TouchableOpacity>
    )
}

class HamburgerCentral extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <ScrollView>
                    <View>
                        <SubdivisionClickable target={"ComplexMusicPage"} subd={"🎵 Complex Music"}/>
                        <SubdivisionClickable target={"ComplexPopPage"} subd={"🎤 Complex Pop Culture"}/>
                        <SubdivisionClickable target={"ComplexStylePage"} subd={"👔 Complex Style"}/>
                        <SubdivisionClickable target={"ComplexSneakersPage"} subd={"👟 Complex Sneakers"}/>
                        <SubdivisionClickable target={"ComplexSportsPage"} subd={"🏀 Complex Sports"}/>
                        <SubdivisionClickable target={"ComplexLifePage"} subd={"📰 Complex Life"}/>
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
    point: {
        color: n_colors.white,
        fontSize: 40,
        textAlign: 'left',
        fontFamily: 'bebas',
        marginTop: 15
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

export default HamburgerCentral;