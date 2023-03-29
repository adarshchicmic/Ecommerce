import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../shared/constants';
import { createEntityAdapter } from '@reduxjs/toolkit';

const styles = StyleSheet.create({
  TextInputStyle: val => ({
    height: hp('5%'),
    width: `${val}%`,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: hp('2%'),
  }),
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    marginTop: hp('5%'),
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(20),
  },
  starStyle: {
    color: '#ff0000',
  },
  doNotHaveAccountContainer: {
    flexDirection: 'row',
    marginTop: hp('10%'),
    justifyContent: 'center',
  },
  createNewAccountStyle: {
    color: '#0000ff',
    fontWeight: '600',
  },
  textDonotHaveAccount: {
    fontWeight: '600',
    marginRight: wp('2%'),
  },
});

export default styles;
