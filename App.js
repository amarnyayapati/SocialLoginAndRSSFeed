import 'react-native-gesture-handler';

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './containers/login'
import ItemList from './containers/itemList'
import Detail from './containers/detail'

const Stack = createStackNavigator();
global.itemObj = {}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="News List" component={ItemList} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;