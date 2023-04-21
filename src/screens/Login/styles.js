import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Text: val => ({
    fontSize: val === COMMON_CONSTS.SIGN_IN ? RFValue(20) : RFValue(14),
    marginBottom: val === COMMON_CONSTS.SIGN_IN ? hp('10%') : RFValue(5),
    fontWeight: '500',
  }),
  scrollViewStyle: {
    marginTop: hp(10),
  },
  TextInputStyle: val => ({
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 1,
    borderColor: val ? '#f4c430' : '#000000',
    marginBottom: hp('2%'),
    color: '#000000',
    padding: 9,
    borderRadius: 6,
  }),
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    borderRadius: 6,
    paddingVertical: 5,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  starStyle: {
    color: '#ff0000',
  },
  doNotHaveAccountContainer: {
    flexDirection: 'row',
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
  footerView: {
    marginTop: hp('10%'),
  },
  lastValidationTextStyle: {
    fontSize: RFValue(8),
    color: '#ff0000',
    marginTop: hp(5),
  },
  validationTextStyle: {
    fontSize: RFValue(8),
    color: '#ff0000',
    width: wp(90),
  },
});

export default styles;
