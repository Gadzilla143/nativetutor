import {Dimensions, Platform} from 'react-native';

export const IOS = Platform.OS === 'ios';

export enum COLORS {
  DARK_BLUE = '#225fbf',
  BLUE = '#5495ff',
  LIGHT_BLUE = '#ccdffc',
  WHITE = '#ffffff',
  LIGHT_GREY = '#f6f8fd',
  DARK_GREY = '#eeeeee',
  DARK = '#172b4d',
  BLACK = '#333333',
  GREY_TEXT = '#606060',
  ERROR = '#fc0303',
}

const {width, height} = Dimensions.get('window');

export enum SIZES {
  WIDTH = width,
  HEIGHT = height,
  h1 = 30,
  h2 = 25,
  h3 = 20,
  h4 = 16,
  h5 = 14,
  h6 = 12,
}

export const FONT_FAMILY = {fontFamily: 'sans-serif'};
