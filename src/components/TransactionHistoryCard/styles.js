import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(10),
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
    shadowColor: '#9ad3db',
    shadowOpacity: 0.5,
    marginTop: heightPercentageToDP(4),
    paddingVertical: heightPercentageToDP(0.5),
    paddingHorizontal: widthPercentageToDP(5),
    borderRadius: 10,
  },
  textStyle: {
    fontSize: RFValue(10),
  },
});

export default styles;
