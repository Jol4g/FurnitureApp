import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: "#212121",
  secondary:"#FB5F3D",
  red: "#B9290A",
  gray: "#7A7A7A"
}

export const SIZES = {

  h1:30,
  h2:22,
  h3:16,
  h4:14,
  body1:30,
  body2:22,
  body3:16,
  body4:14,
  //app dimensions
  width,
  height
}

export const FONTS = {
h1: { fontFamily: "Gilroy-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body4, lineHeight: 22 },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme;

