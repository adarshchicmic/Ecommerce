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
    height: hp('10%'),
    width: wp('40%'),
    justifyContent: 'center',
    backgroundColor: '#dcdfe3',
    marginTop: val === false ? hp(4) : hp(4),
    borderRadius: 30,
    marginHorizontal: wp(3),
  }),
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(12),
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
  headerTextStyle: {
    fontSize: RFValue(24),
    fontWeight: '600',
    marginBottom: hp(5),
    marginLeft: wp(4),
  },
  twoButtonStyle: {
    flexDirection: 'row',
  },
});

export default styles;
