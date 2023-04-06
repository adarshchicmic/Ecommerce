import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonStyle: val => ({
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    marginTop: val === false ? hp(2) : hp(2),
  }),
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(20),
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(14),
    fontWeight: '600',
    marginBottom: hp(5),
  },
});

export default styles;
