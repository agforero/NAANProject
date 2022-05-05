/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { GoToButton } from '../assets/funcs/NavButtons';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../styles/Colors';
import { Central_Grey, Central_White } from '../assets/funcs/NavButtons';
let groups = require('../assets/groups/groups_random.json')

function ClickableTitle({ target, desc }) {
    const navigation = useNavigation();
    return (
        <View style={styles.title_banner}>
            <TouchableOpacity onPress={() => navigation.navigate(target)}>
                <Text style={styles.title}>
                    {desc}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export function Group({subd, title, info, members, members_online}) {
    return (
        <View style={{flexDirection: 'column'}}>
            <View style={styles.subd_banner}>
                <Text style={styles.subd}>
                    Complex {subd}
                </Text>
            </View>
            <View style={styles.title_banner}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.info_banner}>
                <Text style={styles.info}>
                    {info}
                </Text>
                <Text style={styles.members_total}>
                    {members} members
                    <Text style={styles.members_bullet}> • </Text>
                    <Text style={styles.members_online}>{members_online} online</Text>
                </Text>
            </View>
        </View>
    )
}

class LinksExplore extends Component {
    disp() {
        const groups_ls = groups.exp.map((group) =>
            <Group
                subd={group.subdivision}
                title={group.group_name}
                info={group.description}
                members={group.members}
                members_online={group.members_online}
                key={group.id}
            />
        );

        return (
            <View style={styles.disp}>
                <View>
                    <ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Central_Grey
                                    target={"LinksHome"}
                                    desc={"FOR YOU"}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Central_White
                                    target={"LinksExplore"}
                                    desc={"EXPLORE"}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <View style={styles.subd_banner}>
                                <Text style={styles.subd}>
                                    Complex {groups.exp_feature.subdivision}
                                </Text>
                            </View>
                            <ClickableTitle
                                desc={groups.exp_feature.group_name}
                                target={"LinksExplore"}
                            />
                            <View style={styles.info_banner}>
                                <Text style={styles.info}>
                                    {groups.exp_feature.description}
                                </Text>
                                <Text style={styles.members_total}>
                                    {groups.exp_feature.members} members
                                    <Text style={styles.members_bullet}> • </Text>
                                    <Text style={styles.members_online}>{groups.exp_feature.members_online} online</Text>
                                </Text>
                            </View>
                        </View>
                        {groups_ls}
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
	},
	disp: {
		flex: 1,
        backgroundColor: n_colors.black,
		padding: 20,
        justifyContent: 'center'
	},
    header: {
        color: n_colors.white,
        fontSize: 70,
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
        color: '#bbbbbb'
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
        color: 'white'
    },
    members_total: {
        fontSize: 15,
        fontFamily: 'serif',
        color: "#bbbbbb",
        fontStyle: 'italic'
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
    }
});

export default LinksExplore;