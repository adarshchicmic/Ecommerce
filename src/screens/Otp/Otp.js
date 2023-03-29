import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
import OtpInputs from 'react-native-otp-inputs';
const Otp = ({ navigation }) => {
  const [focusOtp, setFocusOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [validation, setValidation] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text(COMMON_CONSTS.SIGN_IN)}>
        {COMMON_CONSTS.AUTHENTICATION_REQUIRED}
      </Text>
      <Text style={styles.Text(COMMON_CONSTS.MOBILE_NUMBER)}>
        {COMMON_CONSTS.OTP}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <OtpInputs handleChange={code => console.log(code)} numberOfInputs={4} />
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => navigation.navigate('CreateNewPassword')}
      />
    </SafeAreaView>
  );
};

export default Otp;
