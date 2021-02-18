import React, {useState} from 'react';
import {SIZES, images, COLORS} from '../../constants';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import OnBoardingHeader from '../../components/OnboardingHeader/OnboardingHeader';

const Onbording1 = ({navigation}) => {
  const [Ref, setRef] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [log, setlog] = useState();
  const scrollHandler = (event) => {
    let CurrentPageNumber;
    const scrollViewAbscissa = parseInt(event.nativeEvent.contentOffset.x);
    setlog(scrollViewAbscissa);
    const pageWidth = parseInt(SIZES.width);
    const remain = scrollViewAbscissa % pageWidth;
    if (remain < 1) {
      CurrentPageNumber = parseInt(scrollViewAbscissa / pageWidth) + 1;
      if (pageNumber !== CurrentPageNumber) {
        setPageNumber(CurrentPageNumber);
      }
    }
  };

  const handlePress = () => {
    Ref.scrollTo({
      x: SIZES.width * pageNumber,
      y: 0,
      animated: true,
    });
  };
  const infosBoarding = [
    {
      title: 'Home Furniture',
      img: images.welcome,
      description: 'Welcome to our furniture app, join us for more gifts',
      style: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.55,
        borderBottomLeftRadius: 20,
      },
    },
    {
      title: 'Office Furniture',
      img: images.welcome2,
      description:
        'ya heythem hetaykzm sanfihs jslnfgsfsbc  hsgdfetduf vhdgstduzd  khzg',
      style: {width: SIZES.width * 0.9, height: SIZES.height * 0.55},
    },
    {
      title: 'Relaxing Furniture',
      img: images.welcome,
      description:
        'ya heythem hetaykzm sanfihs jslnfgsfsbc  hsgdfetduf vhdgstduzd  khzg',
      style: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.55,
        borderBottomRightRadius: 20,
      },
    },
  ];

  return (
    <View style={styles.container}>
      <OnBoardingHeader navigation={navigation} />
      <ScrollView
        ref={(ref) => {
          setRef(ref);
        }}
        horizontal={true}
        style={styles.scrollView}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {infosBoarding.map((info) => {
          return (
            <View key={info.title} style={styles.box}>
              <Image style={info.style} source={info.img} />
              <Text style={styles.title}>{info.title}</Text>
              <Text style={styles.description}>{info.description}</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  handlePress();
                }}>
                <Text style={styles.text}>
                  {pageNumber == 3 ? 'Get Started' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Onbording1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: SIZES.width,
    height: SIZES.height,
  },
  box: {
    flex: 1,
    padding: 20,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: COLORS.red,
    fontFamily: 'Gilroy-Black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingVertical: 15,
  },
  btn: {
    width: SIZES.width * 0.9,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: SIZES.height * 0.02,
    borderRadius: 10,
  },
  description: {
    marginRight: SIZES.width * 0.3,
    paddingBottom: 20,
    color: COLORS.gray,
    lineHeight: 25,
  },
  text: {
    color: '#efefef',
    fontFamily: 'Gilroy-Black',
  },
});
