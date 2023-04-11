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
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(15),
    color: '#ffffff',
  },
  totalAmountStyle: {
    marginTop: hp(5),
    fontSize: RFValue(14),
    fontWeight: '600',
  },
});

export default styles;
