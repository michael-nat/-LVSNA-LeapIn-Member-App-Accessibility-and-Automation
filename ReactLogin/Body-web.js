import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Platform } from 'react-native';
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';
import axe from 'axe-core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//This is fixed

export const Body_web = () => {
  const { height, width } = Dimensions.get('window');

  // axe
  // .run()
  // .then(results => {
  //   if (results.violations.length) {
  //     throw new Error('Accessibility issues found');
  //   }
  // })
  // .catch(err => {
  //   console.error('Something bad happened:', err.message);
  // });

  const React = require('react');
  const ReactDOM = require('react-dom');

  if (process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }
  
  return (


    <View style={styles.container}>
      <script src="node_modules/axe-core/axe.min.js"></script>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="row">
        <div className="col-6">

          <View style={styles.bottomContainer}>
            <form>
            <Text style={styles.loginHeader} accessibilityLabel="Login">LOGIN</Text>
            <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="E-mail" />
            <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Password" secureTextEntry={true} />
            </form>

            <Pressable style={styles.formButton} accessibilityLabel="Log In" accessibilityHint='Logs into entered account'>
              <Text style={styles.buttonText} >LOGIN</Text>
            </Pressable>
          </View>

        </div>
        <div className="col-6">
          <View style={styles.ImageBox}>
            <Svg height={height} width={width / 2} >
              <Image href={require('./assets/LoginWP4.jpg')}
                width={width / 2}
                height={height}
                preserveAspectRatio='none'
              />
            </Svg>

          </View>
        </div>

      </div>





    </View>


  );
}