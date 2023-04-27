import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Platform } from 'react-native';
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Body } from './Body';
import RegisterScreen from './RegisterPage';


const Stack = createStackNavigator();



export default function App() {

  return (
    //<Body/>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Register" component={RegisterScreen} /> 
          <Stack.Screen name = "Login" component={Body} /> 
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

