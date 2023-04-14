import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../shared/constants';

const styles = StyleSheet.create({
  container: {
    height: hp(5),
    width: wp(100),
    backgroundColor: '#9ad3db',
  },
  backArrowStyle: {
    marginLeft: wp(2),
  },
});

export default styles;
