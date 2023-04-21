import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Platform } from 'react-native';
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';

export const Body_web = () => {
  const { height, width } = Dimensions.get('window');


  return (

    <View style={styles.container}>

      <Svg height={641} width={width}>
        <ClipPath id="clipPathID">
          <Ellipse cx={width / 2} rx={height} ry={height +2000} />
        </ClipPath>
        <Image href={require('./assets/LoginWP3.jpg')}
          width={width + 60}
          height={height + 60}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clipPathID)"
        />
      </Svg>

      <View style={styles.bottomContainer}>

        <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="E-mail" />
        <TextInput placeholder="Full Name" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Full Name" />
        <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.textinput} accessibilityLabel="Password" secureTextEntry={true} />

        <Pressable style={styles.formButton} accessibilityLabel="Log In" accessibilityHint='Logs into entered account'>
        
          <Text style={styles.buttonText}>LOGIN</Text> 
        </Pressable>

      </View>

    </View>


  );
}