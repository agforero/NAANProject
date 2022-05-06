/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoToButton_Right } from '../assets/funcs/NavButtons';
import { n_colors } from '../styles/Colors';
import { BackArrow } from './FeaturedArticlePage_Explore';

class PrivacyPolicy extends Component {
    disp() {
        return (
            <View style={styles.disp}>
                <View>
                    <ScrollView>
                        <BackArrow target={"HamburgerLinks"}/>
                        <Text style={styles.header}>Privacy Policy</Text>
                        <Text style={styles.info}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet sem magna. Praesent posuere lorem eget suscipit commodo. Morbi non dolor ac tellus lobortis imperdiet id ac mauris. Curabitur eget lacinia lacus, nec sagittis elit. Nulla in sodales arcu. Maecenas congue orci nec ex rutrum, quis malesuada dui tristique. Pellentesque at lacus sit amet ligula porta maximus. Sed tincidunt efficitur vestibulum. Cras pulvinar auctor tempor.
{'\n\n'}
Nulla facilisi. Integer mauris mauris, pulvinar et aliquam sit amet, scelerisque ac ligula. Nulla non lorem lectus. Cras rutrum mattis porta. Etiam at congue velit. Ut scelerisque vestibulum sapien, non sagittis eros aliquam sit amet. Praesent ac fermentum nulla, vitae tincidunt quam. Sed suscipit risus quis magna mollis, a mattis ante faucibus. Donec nec iaculis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc risus, sodales quis nulla sit amet, dictum ornare augue. Suspendisse dictum, purus aliquam volutpat imperdiet, eros tellus ullamcorper risus, nec maximus ante nulla sit amet erat. Aliquam iaculis bibendum justo, eget dapibus est mattis.
{'\n\n'}
Etiam laoreet ex at molestie rhoncus. Mauris viverra sed tellus a lobortis. Morbi nec consequat odio. Sed semper risus nisi. Sed non fermentum mi. Vivamus convallis eros nulla, et porttitor risus faucibus id. Praesent sit amet purus a sapien euismod cursus. Sed viverra lacus eros, et ullamcorper velit imperdiet luctus. Cras suscipit non lorem eu fringilla. Etiam lobortis nisl at posuere faucibus. Aenean sed sem condimentum, malesuada orci sed, blandit diam.
{'\n\n'}
In ornare erat sit amet rhoncus vehicula. Donec auctor condimentum nisl sit amet pellentesque. Mauris auctor tincidunt dui, at aliquam velit vestibulum id. Vivamus venenatis felis ex, non laoreet neque commodo sit amet. Sed id turpis nec tellus aliquet porttitor. Suspendisse posuere vel sem ac euismod. Donec lectus dolor, sodales id consequat at, commodo quis tortor. Sed scelerisque tempor ultrices. Quisque lacinia massa eget est accumsan, eu commodo tortor pharetra. Mauris iaculis pellentesque nibh, eu suscipit felis fringilla vel. Integer fringilla non neque a viverra. Etiam nibh orci, aliquam vel magna id, bibendum interdum magna. Nullam pretium nunc metus, quis ullamcorper ex congue volutpat.
{'\n\n'}
Proin congue justo eget ultrices sollicitudin. Nulla commodo ex vitae velit lobortis, id lacinia turpis consequat. Fusce luctus sollicitudin ipsum vitae auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet tellus sodales nunc sagittis pellentesque. Quisque pellentesque lorem dolor, et placerat augue pretium sit amet. Sed a elementum quam, nec luctus turpis. Duis posuere, velit nec consequat porttitor, enim ante malesuada ex, sit amet egestas elit arcu nec lacus. Fusce accumsan odio lorem, at venenatis lacus elementum ac. Ut nec commodo justo. Suspendisse dictum placerat felis, eleifend tempus dui iaculis eget. Aenean nec ligula sit amet quam condimentum vulputate eu at lorem. Pellentesque vitae condimentum metus.
{'\n\n'}
Donec scelerisque elit augue, vel sodales dolor condimentum in. Pellentesque porttitor ac tellus ac imperdiet. Suspendisse ac condimentum sapien, quis euismod sem. Pellentesque vestibulum ornare nibh molestie blandit. Proin vel orci ut nunc tempor sollicitudin. Curabitur bibendum imperdiet lobortis. Integer at ante ligula. Ut ornare aliquet volutpat.
{'\n\n'}
Quisque pharetra dapibus turpis, ut laoreet odio. Etiam id velit fringilla risus aliquam tempus. Nullam fermentum eros a condimentum congue. Cras a tristique dolor. Aliquam luctus ac urna at tempor. Cras egestas in massa vel vestibulum. Fusce sed mauris at mauris egestas sagittis. Nullam sit amet purus a massa convallis auctor sit amet ac est. Ut volutpat sit amet neque in euismod. Phasellus rhoncus finibus urna at posuere. Maecenas vel elit quis velit hendrerit molestie. Praesent ac diam justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus semper sed dui id fringilla. Sed lectus lectus, tempus at pharetra a, lacinia at erat.
{'\n\n'}
Proin quis venenatis risus. Quisque sodales leo vel pellentesque pretium. Integer dictum pharetra nisl, in convallis justo sollicitudin ac. Quisque eu vestibulum ante. Curabitur pretium dui vitae odio vulputate rutrum. Quisque lacinia lacus vehicula libero commodo blandit id et lectus. Vestibulum a velit mi. Proin nec congue nibh. Curabitur vitae tellus in ante feugiat euismod ac sed arcu. Maecenas quis purus vitae nibh tincidunt pharetra. Nulla placerat eleifend tempus. Nunc eu feugiat odio.
{'\n\n'}
Phasellus tristique lacus molestie, imperdiet erat eget, dictum sem. Aliquam blandit non est ac finibus. Suspendisse mattis dolor a est porta, quis efficitur nulla convallis. Etiam tempus interdum neque. In gravida, mi in mattis dignissim, lectus justo dapibus ligula, eget vulputate urna arcu vel ligula. Donec dapibus posuere sagittis. Fusce aliquam, ante et venenatis vestibulum, libero urna mattis massa, sed ullamcorper mi nibh eget orci. Proin dignissim sit amet massa eget lacinia. Morbi condimentum, enim quis ultrices lacinia, ex velit commodo orci, ac interdum erat enim et ex. Nam nibh enim, efficitur nec egestas et, hendrerit sit amet quam. Phasellus lacinia bibendum suscipit. Integer aliquam varius felis eu maximus. Sed ultrices at urna quis suscipit. Sed luctus lacus est, eu volutpat est pellentesque sit amet. Ut accumsan rhoncus risus, id porttitor turpis elementum interdum. Nam iaculis gravida diam, sit amet cursus felis blandit id.
{'\n\n'}
Nam congue laoreet nibh eget ullamcorper. Integer sapien erat, varius eget consequat eget, finibus quis leo. Donec consequat luctus elit, id consectetur lectus interdum vel. Etiam bibendum odio eget metus tempor, eu porta mauris vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam iaculis tincidunt libero. Pellentesque varius quam dui. Fusce lacinia sapien non elit facilisis, mattis auctor mi mattis. In dictum mattis metus, non rutrum ipsum aliquam vitae. Duis luctus ornare rutrum. Quisque velit metus, consequat et volutpat eu, sagittis vitae dolor. Proin id scelerisque risus. Morbi iaculis urna vel turpis tincidunt sollicitudin. Quisque a elit cursus erat cursus finibus. In metus tortor, rutrum id lorem vel, fermentum porttitor lacus. Ut iaculis hendrerit massa eu luctus.
{'\n\n'}
Integer pharetra, enim vitae hendrerit convallis, turpis enim lobortis nunc, eu pharetra nibh mi vel nisi. Nam congue, nulla eu luctus aliquet, neque lorem dapibus velit, sed convallis odio quam vel ante. Sed ullamcorper nibh a interdum vehicula. Donec a gravida ante. Integer porta, turpis sed posuere tristique, enim ex rhoncus tortor, in molestie elit lectus accumsan elit. Vestibulum ut orci at erat suscipit posuere. Suspendisse non felis dapibus urna ullamcorper varius ac et nunc. Aliquam consequat elit quis est gravida blandit. Duis ullamcorper, odio in vehicula iaculis, nisi turpis ultrices risus, eget vestibulum sem nibh vel metus. Ut porta placerat ante. Nunc id nisi ex. Cras auctor ligula a nibh imperdiet faucibus. Mauris ut quam id ante pulvinar rhoncus. Praesent vehicula elementum erat viverra viverra. Fusce vestibulum justo eget nisl mattis ultrices. Morbi efficitur mollis arcu vitae porta.
{'\n\n'}
Maecenas placerat suscipit nisi consectetur porta. Vivamus blandit eu nisl nec varius. Fusce facilisis scelerisque nisl. Fusce suscipit dolor in magna fringilla tristique. Curabitur quis velit porta, porta neque vitae, scelerisque massa. Cras molestie eros in vestibulum congue. Aenean condimentum urna vitae fringilla vehicula. Nunc convallis erat ac augue blandit congue nec in ex.
{'\n\n'}
Suspendisse ultricies tortor ut augue cursus, sit amet maximus velit bibendum. Proin tristique erat eget rhoncus placerat. Fusce vel ex malesuada, sodales orci luctus, interdum magna. Suspendisse et nisl vel enim pellentesque fermentum non sit amet massa. Pellentesque vulputate odio in massa commodo iaculis. Praesent ut turpis quam. Curabitur efficitur dignissim nulla convallis molestie. Mauris pretium feugiat egestas. Vestibulum congue tincidunt leo, vel fringilla mauris commodo vel. Morbi non ex tortor.
{'\n\n'}
Fusce efficitur egestas condimentum. Ut quis malesuada neque. Duis eleifend fermentum sapien, in vestibulum elit. Fusce convallis posuere ex vel tempus. Phasellus vitae placerat neque. Maecenas malesuada auctor nulla, vel accumsan nibh sollicitudin eget. In ut luctus quam. Integer eros lacus, blandit nec pulvinar id, luctus at arcu. Duis aliquam tincidunt ornare. Suspendisse potenti. Quisque consequat laoreet justo sed efficitur. Donec ut nisl vel mi dictum feugiat. In ut lobortis eros. Quisque ex metus, pretium at metus at, tincidunt pulvinar nisi. Aliquam finibus dolor nec ex fringilla cursus. Praesent molestie justo vitae turpis pharetra, et vehicula velit volutpat.
{'\n\n'}
Cras interdum aliquet enim, nec suscipit massa molestie a. Donec feugiat imperdiet viverra. Aliquam vel dolor vitae ante fringilla hendrerit a ut mauris. Nulla ut pretium arcu. Nunc nec mollis arcu. Morbi ornare ac dui vel tempus. Nam id condimentum magna, vitae porta dui. Pellentesque sagittis nibh turpis, eu sodales nunc pulvinar eget. Vivamus tortor justo, iaculis vel scelerisque lobortis, consectetur sed nunc. Quisque libero lectus, aliquet sit amet libero ac, tempor blandit metus. Pellentesque a dapibus est. Quisque maximus nibh sit amet nisl finibus, pharetra cursus libero lacinia. Praesent eu faucibus erat. Etiam aliquam lacus id sem auctor eleifend. Morbi sagittis iaculis dui. Pellentesque molestie suscipit magna, in pretium mi.
{'\n\n'}
Vivamus pharetra ultrices nunc a molestie. Donec lobortis diam ac posuere vulputate. Vivamus lorem lacus, tincidunt a pharetra ac, ornare at nisi. Etiam in urna at risus viverra ullamcorper eget ac sapien. Proin facilisis pretium libero, et commodo neque varius eu. Aenean ligula sapien, vehicula eu volutpat et, semper vitae nisl. Aenean magna ex, porttitor eget rutrum ac, efficitur id ex. Vivamus aliquam turpis rhoncus commodo accumsan. Maecenas congue mauris sed lacinia luctus. Duis vel elit elementum, viverra ligula nec, tincidunt augue.
{'\n\n'}
In lobortis est eget porttitor fringilla. In libero odio, tempor in velit eget, pretium volutpat neque. Nulla molestie maximus est, nec mattis arcu ullamcorper quis. Vestibulum pharetra leo quis tortor laoreet sodales. Ut tristique mi imperdiet lacus ullamcorper interdum vel eu neque. Aliquam ut nisi id lorem rhoncus fermentum quis vehicula ante. Aenean placerat tempor magna nec consectetur.
{'\n\n'}
Quisque ornare tellus eu erat feugiat posuere. Vivamus pulvinar eros nec justo hendrerit accumsan. Sed malesuada massa id sapien commodo malesuada. Pellentesque molestie consectetur metus, vel sagittis leo feugiat ac. Nullam elit lorem, blandit vitae sodales mattis, tempor ut nisl. Nam convallis lacus eget bibendum consectetur. Aliquam id molestie diam. Duis sem dolor, lobortis eu faucibus et, sollicitudin ut dolor. Phasellus sed vulputate leo. Vestibulum ut ultricies lorem. Aliquam luctus, leo sed rhoncus laoreet, felis massa pellentesque magna, nec fringilla tellus justo sit amet tellus. Mauris sed arcu tincidunt, fringilla velit et, sollicitudin velit.
{'\n\n'}
Donec pulvinar dui nec lectus facilisis interdum. Mauris vel elementum augue. Integer convallis nibh vitae eleifend euismod. Etiam vitae quam id augue hendrerit dignissim non pulvinar orci. Proin commodo lectus egestas tellus dictum semper. Proin laoreet interdum scelerisque. Vivamus sit amet varius mi. Sed placerat ac ipsum et eleifend. Curabitur ut pharetra dolor, non feugiat eros. Phasellus id nisi diam. Donec sit amet velit in magna dapibus tempus. Nullam volutpat ut lacus sit amet porta.
{'\n\n'}
Sed suscipit nec odio ac varius. Suspendisse potenti. Nunc pulvinar auctor velit in consequat. Suspendisse odio sapien, blandit eget massa eu, commodo viverra arcu. Quisque id nibh non ante malesuada rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In pulvinar lacus at risus faucibus, sed consequat nisi sodales. Mauris convallis felis ac mi placerat, in porta leo rutrum. Sed id fermentum ipsum. Mauris vitae turpis bibendum, tincidunt nisi in, viverra magna. Fusce viverra nisi eget urna pulvinar, eu porttitor mauris venenatis. Maecenas ut eleifend felis, sit amet finibus dui. Etiam ac sollicitudin mauris. Morbi at lacus purus. Vestibulum vulputate ultrices orci, eget faucibus ex. 
                        </Text>
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
        fontFamily: 'bebas',
        marginTop: 10
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
    },
    members_total: {
        fontSize: 15,
        fontFamily: 'serif',
        color: "#bbbbbb",
        fontStyle: 'italic',
        paddingBottom: 10,
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

export default PrivacyPolicy;