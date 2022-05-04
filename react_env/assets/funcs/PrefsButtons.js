/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { n_colors } from '../../styles/Colors';
import CheckBox from '@react-native-community/checkbox';

export function PrefsButton({ label }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    
    return (
      <View style={{
        flexDirection: 'row',
      }}>
        <View style={{flex: 1}}>
          <CheckBox
            style={styles.check}
            disabled={false}
            value={toggleCheckBox}
            tintColors={{true: 'black'}}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
        <View style={{
          flex: 5,
          justifyContent: 'center'
        }}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: n_colors.black,
      //height: 50,
      //padding: 10       
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
      textAlign: 'left',
      fontFamily: 'serif',
      fontStyle: 'italic'
    },
    check: {
      backgroundColor: 'white',
      margin: 10,
    }
})