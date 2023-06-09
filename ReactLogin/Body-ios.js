import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Platform } from 'react-native';
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';
import axe from 'axe-core';
export const Body_ios = () => {

  

    const { height, width } = Dimensions.get('window');
    const imagePosition = useSharedValue(1);

  
  
  
    const imageAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
      return {
        transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }]
      }
    })
  
    const buttonAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
      return {
        opacity: withTiming(imagePosition.value, { duration: 500 }),
        transform: [{translateY: withTiming(interpolation, {duration:1000})}]
      }
    })
  
    const formAnimateStyle = useAnimatedStyle(() => {
      return{
        opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) 
        : withTiming (0, {duration:300})  
      }
    })
  
    const loginHandler = () => {
      imagePosition.value = 0
    }
    const CloseHandler = () => {
      imagePosition.value = 1
    }
    
  
    return (
      
      
      <View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
          <Svg height={height + 60} width={width}>
            <ClipPath id="clipPathID">
              <Ellipse cx={width / 2} rx={height} ry={height + 60} />
            </ClipPath>
            <Image href={require('./assets/LoginWP3.jpg')}
              width={width + 60}
              height={height + 60}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clipPathID)"
            />
          </Svg>
          <Pressable style={styles.closeButtonContainer} onPress={CloseHandler} accessibilityLabel = "Close Button" accessibilityHint='Returns to the home page'>
            <Text>X</Text>
          </Pressable>
        </Animated.View>
  
        <View style={styles.bottomContainer}> 
          <Animated.View style = {buttonAnimatedStyle} >
            <Pressable style={styles.button} onPress={loginHandler} accessibilityLabel = "Log In" accessibilityHint='Opens the login page'>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
          </Animated.View>
          
          <Animated.View style = {buttonAnimatedStyle}>
            <Pressable style={styles.button} accessibilityLabel = "Register" accessibilityHint='Opens the register page'>
              <Text style={styles.buttonText}>REGISTER</Text>
            </Pressable>
          </Animated.View>
  
          <Animated.View style = {[styles.formInputContainer, formAnimateStyle]}>
            <TextInput placeholder="Email" placeholderTextColor="grey" style = {styles.textinput} accessibilityLabel = "E-mail"/>
            <TextInput placeholder="Full Name" placeholderTextColor="grey" style = {styles.textinput} accessibilityLabel = "Full Name"/>
            <TextInput placeholder="Password" placeholderTextColor="grey" style = {styles.textinput} accessibilityLabel = "Password" secureTextEntry={true}/>
            <Pressable style= {styles.formButton} accessibilityLabel = "Log In" accessibilityHint='Logs into entered account'>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    );
  }