import { StyleSheet } from 'react-native';
import { COMMON_CONSTS } from '../../../../shared/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  Text: val => ({
    fontSize: val === COMMON_CONSTS.CREATE_ACCOUNT ? RFValue(30) : RFValue(15),
    marginBottom: val === COMMON_CONSTS.CREATE_ACCOUNT ? hp('10%') : RFValue(5),
    fontWeight: '500',
  }),
  TextInputStyle: val => ({
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 1,
    borderColor: val ? '#f4c430' : '#000000',
    marginBottom: hp('2%'),
  }),

  starStyle: {
    color: '#ff0000',
  },
});

export default styles;
