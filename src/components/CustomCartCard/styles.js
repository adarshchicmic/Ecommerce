import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COMMON_CONSTS } from '../../shared/constants';

const styles = StyleSheet.create({
  cardContainerStyle: {
    margin: 10,
    backgroundColor: '#fff',
    display: 'flex',
    width: wp(90),
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
    shadowColor: '#9ad3db',
    shadowOpacity: 0.5,
    shadowRadius: 0,
    borderRadius: 20,
  },
  cardImageStyle: {
    alignSelf: 'center',
    width: wp(40),
    height: hp(25),
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: RFValue(14),
    fontWeight: '400',
  },
  priceStyle: {
    fontSize: RFValue(14),
    fontWeight: '400',
  },
  quantityStyle: {
    fontSize: RFValue(10),
    fontWeight: '400',
  },
  addToCartBtnStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp(50),
    height: hp(5),
    borderRadius: 10,
    backgroundColor: '#f4c430',
  },
  addToCartBtntextStyle: {
    fontSize: RFValue(10),
    fontWeight: '600',
    color: '#000000',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
