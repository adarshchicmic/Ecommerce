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
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    marginTop: hp(3),
    marginBottom: hp(3),
    alignSelf: 'center',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(15),
    color: '#000000',
  },
  totalAmountStyle: {
    marginTop: hp(5),
    fontSize: RFValue(14),
    fontWeight: '600',
    marginLeft: wp(3),
  },
  cartButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
