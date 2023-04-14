import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { createEntityAdapter } from '@reduxjs/toolkit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  afterImage: {
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  afterPriceStyle: {
    width: wp(80),
  },
  imageStyle: {
    width: wp(90),
    height: hp(40),
    resizeMode: 'contain',
    marginBottom: hp(10),
    alignSelf: 'center',
  },
  namePriceStyle: {
    width: wp(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
  },
  titleStyle: {
    width: wp(55),
    fontSize: RFValue(20),
    fontWeight: '400',
    alignSelf: 'center',
  },
  priceStyle: {
    alignSelf: 'center',
    width: wp(40),
    fontSize: RFValue(20),
    fontWeight: '500',
  },
  hurryUpStyle: {
    fontSize: RFValue(15),
    fontWeight: 500,
    marginBottom: 10,
  },
  itemLeftStyle: {
    color: '#ff0000',
    fontSize: RFValue(15),
    marginBottom: 10,
  },
  buttonStyle: {
    height: hp('5%'),
    width: wp('40%'),
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    borderRadius: 20,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(14),
  },
  twoButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp(100),
  },
  productDetailTitleStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    marginTop: 10,
  },
  detailStyle: {
    fontSize: RFValue(12),
  },
  quantityStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quantityTextStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    marginLeft: 5,
  },
  reviewStyle: {
    height: hp(10),
    width: wp(85),
    borderWidth: 2,
  },
  reviewContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerScrollView: {
    justifyContent: 'center',
  },
});

export default styles;
