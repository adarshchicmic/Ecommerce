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
    fontSize: val === COMMON_CONSTS.CREATE_ACCOUNT ? RFValue(20) : RFValue(10),
    marginBottom: val === COMMON_CONSTS.CREATE_ACCOUNT ? hp('10%') : RFValue(5),
    fontWeight: '500',
  }),
  TextInputStyle: val => ({
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 1,
    borderColor: val ? '#f4c430' : '#000000',
    marginBottom: hp('2%'),
    color: '#000000',
    padding: 9,
  }),
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    // marginTop: hp('5%'),
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(15),
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
    fontSize: RFValue(10),
  },
  textValidation: {
    fontSize: RFValue(8),
    color: '#ff0000',
  },
  textValidationlast: {
    fontSize: RFValue(8),
    color: '#ff0000',
    marginTop: hp('5%'),
  },
});

export default styles;
