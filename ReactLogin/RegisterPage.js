import React from "react";
import { Text, View, Dimensions, TextInput, Pressable, Button } from "react-native";
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <div class="col-6">

        <View style={styles.bottomContainer}>
          <Text style={styles.loginHeader} accessibilityLabel="Login">REGISTER</Text>
          <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="E-mail" />
          <TextInput placeholder="Full Name" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Full Name" />
          <TextInput placeholder="Phone Number" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Phone Number" />
          <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Password" secureTextEntry={true} />

          <Pressable style={styles.formButton} accessibilityLabel="Log In" onPress={() => navigation.navigate("Login")} accessibilityHint='Logs into entered account'>

            <Text style={styles.buttonText} >Register</Text>


          </Pressable>
        </View>

      </div>
    </View>
  );
}