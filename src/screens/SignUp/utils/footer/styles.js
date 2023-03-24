import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  buttonStyle: {
    height: hp('5%'),
    width: wp('90%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    marginTop: hp('5%'),
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(20),
  },
});

export default styles;
