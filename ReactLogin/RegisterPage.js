import React from "react";
import { Text, View, Dimensions, TextInput, Pressable, Button } from "react-native";
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import axe from "axe-core";

export default function HomeScreen({ navigation }) {

  // axe.run()
  // .then(results => {
  //   if (results.violations.length) {
  //     throw new Error('Accessibility issues found');
  //   }
  // })
  // .catch(err => {
  //   console.error('Something bad happened:', err.message);
  // });

  // axe.run(
  //   {
  //     rules: {
  //       'color-contrast': { enabled: false },
  //       'valid-lang': { enabled: false }
  //     }
  //   },
  //   (err, results) => {
  //     // ...
  //   }
  // );

  const React = require('react');
  const ReactDOM = require('react-dom');

  if (process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <div className="col-6">

        <View style={styles.bottomContainer}>
        <script src="node_modules/axe-core/axe.min.js"></script>

          <Text style={styles.loginHeader} accessibilityLabel="Login">REGISTER</Text>
          <form>
          <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="E-mail" />
          <TextInput placeholder="Full Name" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Full Name" />
          <TextInput placeholder="Phone Number" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Phone Number" />
          <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Password" secureTextEntry={true} />
          </form>
        

          <Pressable style={styles.formButton} accessibilityLabel="Log In" onPress={() => navigation.navigate("Login")} accessibilityHint='Logs into entered account'>

            <Text style={styles.buttonText} >Register</Text>


          </Pressable>
        </View>

      </div>
    </View>
  );
}