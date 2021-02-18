import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {images, SIZES, COLORS} from '../../constants';
const OnBoardingHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={images.freshroom} style={styles.image} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.02,
  },
  text: {
    color: COLORS.gray,
    fontSize: 16,
  },
});

export default OnBoardingHeader;
