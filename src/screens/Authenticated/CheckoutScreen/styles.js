import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: heightPercentageToDP(5),
    marginLeft: widthPercentageToDP(5),
  },
  buttonStyle: {
    width: widthPercentageToDP(35),
  },
  button: {
    color: '#0000ff',
    fontSize: RFValue(16),
  },
});

export default styles;
