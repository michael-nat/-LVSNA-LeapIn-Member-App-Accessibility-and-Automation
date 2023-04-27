import {  Platform } from 'react-native';

import { Body_ios } from './Body-ios';
import { Body_android } from './Body-android';
import { Body_web } from './Body-web';
import { Body_web2 } from './RegisterPage';
import HomeScreen from './RegisterPage';
export const Body = Platform.select({
  default: Body_web,
  ios: Body_ios,
  android: Body_android
});

export const Registers = Platform.select({
  default: HomeScreen,
  ios: Body_ios ,
  android: Body_android
});