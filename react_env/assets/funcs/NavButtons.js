/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../../styles/Colors';

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
        </View>
      </TouchableOpacity>
    );
}

export function GoToButton_Right({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      title={desc}
      onPress={() => navigation.navigate(target)}
    >
      <View>
        <Text style={styles.label_right}>{desc} ⟹</Text>
      </View>
    </TouchableOpacity>
  );
}

export function GoToButton_NoArrow({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      title={desc}
      onPress={() => navigation.navigate(target)}
    >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function GoToButton_Prefs({ target, desc, states }) {
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
      </View>
    </TouchableOpacity>
  );
};

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
      </View>
    </TouchableOpacity>
  );
}

export function Header_White({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.header_white}
      title={desc}
      onPress={() => navigation.navigate(target)}
    >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.header_white_label}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function Header_Black({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.header_black}
      title={desc}
      onPress={() => navigation.navigate(target)}
    >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.header_black_label}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function Central_White({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(target)}>
      <Text style={styles.central_white}>{desc}</Text>
    </TouchableOpacity>
  )
}

export function Central_Grey({ target, desc }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(target)}>
      <Text style={styles.central_grey}>{desc}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: n_colors.black,   
    },
    button_prefs: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      marginTop: 10,
    },
    button_debug: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      borderWidth: 1,
      borderColor: n_colors.white   
    },
    header_white: {
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    header_black: {
      alignItems: 'center',
      backgroundColor: 'black',
      justifyContent: 'center'
    },
    header_white_label: {
      textAlign: 'center',
      color: 'black',
      fontFamily: 'bebas',
      fontSize: 35,
    },
    header_black_label: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'bebas',
      fontSize: 35,
    },
    label: {
      color: n_colors.white,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'serif',
      fontStyle: 'italic',
      marginRight: 5
    },
    label_right: {
      color: n_colors.white,
      fontSize: 20,
      textAlign: 'right',
      fontFamily: 'serif',
      fontStyle: 'italic',
      marginRight: 5,
      
    },
    central_white: {
      color: 'white',
      fontFamily: 'bebas',
      fontSize: 66,
      flex: 1
    },
    central_grey: {
      color: '#555555',
      fontFamily: 'bebas',
      fontSize: 66,
      flex: 1,
    }
})