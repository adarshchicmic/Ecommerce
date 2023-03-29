import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
const ForgotPassword = ({ navigation }) => {
  const [focusOtp, setFocusOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [validation, setValidation] = useState(false);

  // this is for setting credentials
  const handleInputMobileNumber = value => {
    setOtp(value);
  };

  // this is for onFocus and onBlur Functionality
  const handleOnFocus = () => {
    setFocusOtp(true);
  };
  const handelOnBlur = () => {
    setFocusOtp(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text(COMMON_CONSTS.SIGN_IN)}>
        {COMMON_CONSTS.FORGOT_PASSWORD}
      </Text>
      <Text style={styles.text(COMMON_CONSTS.PASSWORD)}>
        {COMMON_CONSTS.OTP}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.textInputStyle(focusOtp)}
        onFocusInput={() => handleOnFocus()}
        onBlurInput={() => handelOnBlur()}
        maxLength={4}
      />
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
