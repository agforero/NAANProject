/* eslint-disable prettier/prettier */
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../../styles/Colors';
import Arrow from 'react-native-arrow'

export function GoToButton({ target, desc }) {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.button}
        title={desc}
        onPress={() => navigation.navigate(target)}
      >
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.label}>{desc} ⟹</Text>
          {/*<Arrow size={40} color={'white'}/>*/}
        </View>
      </TouchableOpacity>
    );
}

export function GoToButton_Prefs({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button_prefs}
      title={desc}
      onPress={() => 
        navigation.navigate(target)
      }
    >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{desc} ⟹</Text>
        {/*<Arrow size={40} color={'white'}/>*/}
      </View>
    </TouchableOpacity>
  );
}

export function GoToButton_Debug({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button_debug}
      title={desc}
      onPress={() => navigation.navigate(target)}
    >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{desc} ⟹</Text>
        {/*<Arrow size={40} color={'white'}/>*/}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      //height: 50,
      //padding: 10       
    },
    button_prefs: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      marginTop: 100,
    },
    button_debug: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      borderWidth: 1,
      borderColor: n_colors.white   
    },
    label: {
      color: n_colors.white,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'serif',
      fontStyle: 'italic',
      marginRight: 5
    },
})