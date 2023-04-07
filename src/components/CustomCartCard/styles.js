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
    shadowColor: '#00000',
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    borderRadius: 50,
  },
  cardImageStyle: {
    alignSelf: 'center',
    width: wp(40),
    height: hp(25),
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  priceStyle: {
    fontSize: RFValue(20),
    fontWeight: '400',
  },
  quantityStyle: {
    fontSize: RFValue(20),
    fontWeight: '400',
  },
  addToCartBtnStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp(50),
    height: hp(5),
    borderRadius: 16,
    backgroundColor: '#f4c430',
  },
  addToCartBtntextStyle: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
