import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../../shared/constants';

const styles = StyleSheet.create({
  text: val => ({
    fontSize: val === COMMON_CONSTS.ORDER_SUMMARY ? RFValue(20) : RFValue(12),
    marginVertical: val === COMMON_CONSTS.ORDER_SUMMARY ? hp(10) : RFValue(5),
    fontWeight: '500',
    width: wp(90),
    alignSelf: 'center',
  }),
  TextInputStyle: val => ({
    height: hp('10%'),
    width: wp('90%'),
    borderWidth: 1,
    borderColor: val ? '#f4c430' : '#000000',
    marginBottom: hp('2%'),
    color: '#000000',
    padding: 9,
    borderRadius: 6,
    alignSelf: 'center',
  }),
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: hp(10),
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(15),
  },
  starStyle: {
    color: '#ff0000',
  },
  cashOnDeliveryContainer: {
    flexDirection: 'row',
    // alignSelf: 'center',
    // marginRight: wp(80),
    marginLeft: wp(11),
    alignSelf: 'center',
  },
  payWithStripeTextStyle: {
    color: '#0000ff',
    alignSelf: 'center',
  },
  validationTextStyle: {
    width: wp(89),
    color: 'red',
    alignSelf: 'center',
    marginBottom: hp(5),
  },
});

export default styles;
