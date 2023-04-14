import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../shared/constants';
import { createEntityAdapter } from '@reduxjs/toolkit';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp(100),
    width: wp(100),
    backgroundColor: '#80E8E0',
  },
  textStyle: {
    color: '#ffffff',
  },
});

export default styles;
