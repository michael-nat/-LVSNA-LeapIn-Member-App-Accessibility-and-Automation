import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Platform } from 'react-native';
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';
import "bootstrap/dist/css/bootstrap.min.css"

export const Body_web = () => {
  const { height, width } = Dimensions.get('window');


  return (


    <View style={styles.container}>

      <div class="row">
      <div class="col-6">

      <View style={styles.bottomContainer}>
      <Text style={styles.loginHeader}accessibilityLabel="Login">LOGIN</Text>
        <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="E-mail" />
        <TextInput placeholder="Full Name" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Full Name" />
        <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Password" secureTextEntry={true} />

        <Pressable style={styles.formButton} accessibilityLabel="Log In" accessibilityHint='Logs into entered account'>

          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

      </View>
      </div>
      <div class="col-6">
      <View style={styles.ImageBox}>
        <Svg height={height} width={width/2} >
          <Image href={require('./assets/LoginWP4.jpg')}
            width={width/2}
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