/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoToButton } from '../assets/funcs/NavButtons';
import { n_colors } from '../styles/Colors';
import { BackArrow } from './FeaturedArticlePage_Explore';
let groups = require('../assets/groups/groups_random.json')
let users = require('../assets/groups/fake_users.json')

// I literally had to do this because React won't let me
// use require() with changing strings :^)
// again, I am sorry for this abomination

export function FakeMessageDisp0({message}) {
    var random_user = users.fake_users[0]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p0.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}

export function FakeMessageDisp1({message}) {
    var random_user = users.fake_users[1]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p1.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp2({message}) {
    var random_user = users.fake_users[2]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p2.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp3({message}) {
    var random_user = users.fake_users[3]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p3.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp4({message}) {
    var random_user = users.fake_users[4]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p4.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp5({message}) {
    var random_user = users.fake_users[5]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p5.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp6({message}) {
    var random_user = users.fake_users[6]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p6.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp7({message}) {
    var random_user = users.fake_users[7]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p7.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp8({message}) {
    var random_user = users.fake_users[8]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p8.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}
export function FakeMessageDisp9({message}) {
    var random_user = users.fake_users[9]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/fakepeople/p9.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    {random_user.username}
                </Text>
                <Text style={styles.message_body}>
                    {message}
                </Text>
            </View>
        </View>
    )
}

export function FakeMessageDisp_Dev({message}) {
    var random_user = users.fake_users[9]

    return (
        <View style={styles.message_frame}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.message_img}
                    source={require("../assets/imgs/const/best_dev.jpg")}
                />
            </View>
            <View style={styles.message_text}>
                <Text style={styles.message_user}>
                    AGForero
                </Text>
                <Text style={styles.message_body}>
                    I love Quisquam :)
                </Text>
            </View>
        </View>
    )
}

function SubmitMessageDisp() {
    const navigation = useNavigation();
    return (
        <View style={styles.message_frame}>
        <View style={{flex: 1}}>
            <Image
                style={styles.message_img}
                source={require("../assets/imgs/const/best_dev.jpg")}
            />
        </View>
        <View style={styles.input_text}>
            <Text style={styles.message_user}>
                Submit a comment...
            </Text>
            <View style={{
                borderColor: 'white',
                borderWidth: 2,
            }}>
                <TextInput 
                    style={styles.message_body}
                    multiline
                    onSubmitEditing={() => navigation.navigate("FeaturedLink_Home_Post")}
                />
            </View>
            <Text 
                style={{
                    color: '#bbbbbb',
                    textAlign: 'right',
                    fontFamily: 'bebas',
                    fontSize: 20
                }}
                onPress={() => navigation.navigate("FeaturedLink_Home_Post")}
            >
                Submit
            </Text>
        </View>
    </View>
    );
}

class FeaturedLink_Home_Post extends Component {
    disp() {
        const lorem = groups.int_feature.lorem;
        const messages = [
            `I'm gonna be honest with you guys...I have no idea what ${lorem} is`,
            `What, seriously? Every real sneakerhead knows what ${lorem} is lol, you're just a poser`,
            `cmon bro ur being annoying, ${lorem} has only been out for like 3 days`,
            `are we seriously having this stupid debate again lol ${lorem} isnt even a big deal, its kind of derivative and doesn't really contribute much to the sneaker scene`,
            `It's really just like Nietzsche said in his text, \"On Sneakers and Their Effects on Contemporary German Society: a Study on ${lorem}\". It is a must-read for any sneakerhead, or any intellectual for that matter (though, I'm afraid, I'm amidst those below my own intellectual scope...)`,
            `@NietzscheEnthusiast HAHAHAHA IS THIS GUY FOR REAL`,
            `Let's keep the discussion focused on ${lorem}. I do think Nietzsche is an interesting source to reference, but I'd rather talk about someone recent. Kanye was actually endorsing ${lorem} on his Twitter handle earlier, which is pretty baller`,
            `Wait, none of you are serious, right? ${lorem} 0.1 was a fluke and barely held any increased value over time, what makes you think ${lorem} 1.0 will be any better?`,
            `yea but ${lorem} 1.0 has a bunch of cool features like dynamic flurbo-blasters and rubber-tipped hydrosoles, complete with kinetic 3D laser-guided shoelaces and diamond-encrusted aglets`,
            `yes and I can use ${lorem} on my scooter :)`,
        ];

        return (
            <View style={styles.disp}>
                <View>
                    <ScrollView>
                        <BackArrow target={"LinksHome"}/>
                        <Text style={styles.subd}>
                            {groups.int_feature.subdivision}
                        </Text>
                        <Text style={styles.header}>
                            {groups.int_feature.group_name}
                        </Text>
                        <Text style={styles.info}>
                            {groups.int_feature.description}
                        </Text>
                        <Text style={styles.members_total}>
                            {groups.int_feature.members} members
                            <Text style={styles.members_bullet}> • </Text>
                            <Text style={styles.members_online}>{groups.int_feature.members_online} online</Text>
                        </Text>
                        <FakeMessageDisp0 message={messages[0]}/>
                        <FakeMessageDisp1 message={messages[1]}/>
                        <FakeMessageDisp2 message={messages[2]}/>
                        <FakeMessageDisp3 message={messages[3]}/>
                        <FakeMessageDisp4 message={messages[4]}/>
                        <FakeMessageDisp5 message={messages[5]}/>
                        <FakeMessageDisp6 message={messages[6]}/>
                        <FakeMessageDisp7 message={messages[7]}/>
                        <FakeMessageDisp8 message={messages[8]}/>
                        <FakeMessageDisp9 message={messages[9]}/>
                        <FakeMessageDisp_Dev/>
                        <SubmitMessageDisp/>
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
        marginTop: 5
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

export default FeaturedLink_Home_Post;