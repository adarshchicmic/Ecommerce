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
    // display: 'flex',
    width: wp(45),
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
    shadowColor: '#00000',
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  },

  cardImageStyle: {
    width: wp(40),
    height: hp(25),
  },
  titleStyle: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  priceStyle: {
    fontSize: RFValue(20),
    fontWeight: '400',
  },
  addToCartBtnStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartBtntextStyle: {
    backgroundColor: '#ff00a2',
    color: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
  },
});

export default styles;
