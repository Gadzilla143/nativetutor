import {Dimensions, Platform} from "react-native";

export const IOS = Platform.OS === 'ios'

export const COLORS = {
  DARK_BLUE: '#225fbf',
  LIGHT_BLUE: '#5495ff',
  WHITE: '#ffffff',
  LIGHT_GREY: '#f6f8fd',
  DARK_GREY: '#eeeeee',
  DARK: '#172b4d',
  BLACK: '#333333',
};

const {width, height} = Dimensions.get("window");

export const SIZES = {
  WIDTH: width,
  HEIGHT: height,
  h1: 30,
  h2: 25,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 12,
};

export const FONT_FAMILY = {fontFamily: 'sans-serif'};
