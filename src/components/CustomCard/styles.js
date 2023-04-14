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
    width: wp(45),
    paddingTop: 5,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: '#9ad3db',
    shadowOpacity: 0.7,
    shadowRadius: 0,
    borderRadius: 15,
    justifyContent: 'center',
  },

  cardImageStyle: {
    alignSelf: 'center',
    width: wp(44),
    height: hp(25),
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: RFValue(14),
    fontWeight: '400',
  },
  priceStyle: {
    fontSize: RFValue(10),
    fontWeight: '400',
  },
  quantityStyle: {
    fontSize: RFValue(10),
    fontWeight: '400',
  },
  addToCartBtnStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartBtntextStyle: {
    backgroundColor: '#f4c430',
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default styles;
