/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { n_colors } from './styles/Colors';
import FirstPage from './pages/FirstPage';
import PrefsSelect from './pages/PrefsSelect';
import CentralHome from './pages/CentralHome';
import CentralExplore from './pages/CentralExplore'
import LinksHome from './pages/LinksHome';
import FeaturedArticlePage_Central from './pages/FeaturedArticlePage_Central'
import FeaturedArticlePage_Links from './pages/FeaturedArticlePage_Links'
import HamburgerCentral from './pages/HamburgerCentral'
import HamburgerLinks from './pages/HamburgerLinks'

import ComplexMusicPage from './pages/central/ComplexMusicPage'
import ComplexLifePage from './pages/central/ComplexLifePage'
import ComplexPopPage from './pages/central/ComplexPopPage'
import ComplexSneakersPage from './pages/central/ComplexSneakersPage'
import ComplexSportsPage from './pages/central/ComplexSportsPage'
import ComplexStylePage from './pages/central/ComplexStylePage'

import { Header_Black, Header_White } from './assets/funcs/NavButtons';

function TopNav_Central() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: "row", padding: 20, paddingRight: 40}}>
      <View style={{flex: 2, justifyContent: 'center', marginRight: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerCentral")}>
          <Image
            style={styles.hamb}
            source={require("./assets/imgs/const/hamb_unsel.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header_selected}>
        <Header_White target={"CentralHome"} desc={"CENTRAL"}/>
      </View>

      <View style={styles.header_unselected}>
        <Header_Black target={"LinksHome"} desc={"LINKS"}/>
      </View>
    </View>
  );
}

function TopNav_Links() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: "row", padding: 20, paddingRight: 40}}>
      <View style={{flex: 2, justifyContent: 'center', marginRight: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerLinks")}>
          <Image
            style={styles.hamb}
            source={require("./assets/imgs/const/hamb_unsel.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header_selected}>
        <Header_Black target={"CentralHome"} desc={"CENTRAL"}/>
      </View>

      <View style={styles.header_unselected}>
        <Header_White target={"LinksHome"} desc={"LINKS"}/>
      </View>
    </View>
  );
}

function TopNav_Central_Hamb() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: "row", padding: 20, paddingRight: 40}}>
      <View style={{flex: 2, justifyContent: 'center', marginRight: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate("CentralHome")}>
          <Image
            style={styles.hamb}
            source={require("./assets/imgs/const/hamb_sel.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header_selected}>
        <Header_White target={"CentralHome"} desc={"CENTRAL"}/>
      </View>

      <View style={styles.header_unselected}>
        <Header_Black target={"LinksHome"} desc={"LINKS"}/>
      </View>
    </View>
  );
}

function TopNav_Links_Hamb() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: "row", padding: 20, paddingRight: 40}}>
      <View style={{flex: 2, justifyContent: 'center', marginRight: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate("LinksHome")}>
          <Image
            style={styles.hamb}
            source={require("./assets/imgs/const/hamb_sel.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header_selected}>
        <Header_Black target={"CentralHome"} desc={"CENTRAL"}/>
      </View>

      <View style={styles.header_unselected}>
        <Header_White target={"LinksHome"} desc={"LINKS"}/>
      </View>
    </View>
  );
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackVisible: false,
      }}
      mode="modal">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="PrefsSelect"
          component={PrefsSelect}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CentralHome"
          component={CentralHome}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="CentralExplore"
          component={CentralExplore}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="LinksHome"
          component={LinksHome}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Links {...props} />
          }}
        />
        <Stack.Screen
          name="HamburgerCentral"
          component={HamburgerCentral}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central_Hamb {...props} />
          }}
        />
        <Stack.Screen
          name="HamburgerLinks"
          component={HamburgerLinks}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Links_Hamb {...props} />
          }}
        />
        <Stack.Screen
          name="FeaturedArticlePage_Central"
          component={FeaturedArticlePage_Central}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="FeaturedArticlePage_Links"
          component={FeaturedArticlePage_Links}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexMusicPage"
          component={ComplexMusicPage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexLifePage"
          component={ComplexLifePage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexPopPage"
          component={ComplexPopPage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexSneakersPage"
          component={ComplexSneakersPage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexSportsPage"
          component={ComplexSportsPage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
        <Stack.Screen
          name="ComplexStylePage"
          component={ComplexStylePage}
          options={{
            headerShown: true,
            headerTitle: (props) => <TopNav_Central {...props} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header_selected: {
    flex: 12,
  },
  header_selected_font: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'bebas',
    fontSize: 35,
  },
  header_unselected: {
    flex: 12,
  },
  header_unselected_font: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'bebas',
    fontSize: 35,
  },
  hamb: {
    height: 20,
    width: "100%",
    resizeMode: 'contain',
  }
});

export default App;