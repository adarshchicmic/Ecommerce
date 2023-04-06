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
  },
  afterImage: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  afterPriceStyle: {
    width: wp(80),
  },
  imageStyle: {
    width: wp(100),
    height: hp(60),
    resizeMode: 'contain',
    marginRight: wp(10),
  },
  namePriceStyle: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  priceStyle: {
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  hurryUpStyle: {
    fontSize: RFValue(15),
    fontWeight: 600,
    marginBottom: 10,
  },
  itemLeftStyle: {
    color: '#ff0000',
    fontSize: RFValue(15),
    marginBottom: 10,
  },
  buttonStyle: {
    height: hp('5%'),
    width: wp('50%'),
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    borderRadius: 20,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: RFValue(14),
  },
  twoButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  productDetailTitleStyle: {
    fontSize: RFValue(20),
    fontWeight: '600',
    marginTop: 10,
  },
  detailStyle: {
    fontSize: RFValue(15),
  },
  quantityStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quantityTextStyle: {
    fontSize: RFValue(15),
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default styles;
