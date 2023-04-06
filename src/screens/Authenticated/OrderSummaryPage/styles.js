import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: val => ({
    fontSize: val === COMMON_CONSTS.ORDER_SUMMARY ? RFValue(20) : RFValue(12),
    marginBottom: val === COMMON_CONSTS.ORDER_SUMMARY ? hp(10) : RFValue(5),
    fontWeight: '500',
  }),
  TextInputStyle: val => ({
    height: hp('10%'),
    width: wp('95%'),
    borderWidth: 1,
    borderColor: val ? '#f4c430' : '#000000',
    marginBottom: hp('2%'),
    color: '#000000',
    padding: 9,
    borderRadius: 6,
  }),
  buttonStyle: {
    height: hp('5%'),
    width: wp('95%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    borderRadius: 6,
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
  },
  payWithStripeTextStyle: {
    color: '#0000ff',
  },
  payWithStripeFullButton: {
    margin: hp(5),
  },
  validationTextStyle: {
    fontSize: RFValue(8),
    color: '#ff0000',
  },
});

export default styles;
