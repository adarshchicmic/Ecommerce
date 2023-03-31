import { SafeAreaView, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
import { useResendOtpMutation } from '../../services/api';
const ForgotPassword = ({ navigation }) => {
  const [focus, setFocus] = useState({
    focusMobileNumber: false,
  });
  const [credentials, setCredentials] = useState({
    mobileNumber: '',
  });
  const [validation, setValidation] = useState({
    mobileNumber: false,
  });
  const [allfilled, setAllFilled] = useState(false);
  const [resendOtp, resendOtpResult] = useResendOtpMutation();
  useEffect(() => {
    if (
      resendOtpResult.isLoading === false &&
      resendOtpResult.isSuccess === true &&
      resendOtpResult.data.status === 200
    ) {
      console.log(resendOtpResult, 'resendOtpResult');
      navigation.navigate('Otp');
    }
  }, [resendOtpResult]);

  const handleButtonPress = () => {
    console.log(credentials.mobileNumber, 'ye mobile number hai');
    resendOtp({ phone_number: credentials.mobileNumber });
    console.log(resendOtpResult);
    // navigation.navigate('CreateNewPassword');
  };
  // this is for setting credentials
  const handleInputMobileNumber = value => {
    setCredentials({ mobileNumber: value });
    console.log(value, 'mobile number hai ye');
    console.log(credentials.mobileNumber, 'ye mobile number hai');
    const validationMobileNumber = COMMON_CONSTS.MOBILE_REGEX.test(value);
    setValidation({
      mobileNumber: validationMobileNumber,
    });
  };

  // this is for onFocus and onBlur Functionality
  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ focusPassword: false, focusMobileNumber: true });
    }
  };
  const handelOnBlur = inputName => {
    if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: false });
    }
  };

  const validate = () => {
    navigation.navigate('CreateNewPassword');
    if (!COMMON_CONSTS.MOBILE_REGEX.test(credentials.mobileNumber)) {
      setValidation({
        ...validation,
        mobileNumber: true,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text(COMMON_CONSTS.SIGN_IN)}>
        {COMMON_CONSTS.FORGOT_PASSWORD}
      </Text>
      <Text style={styles.Text(COMMON_CONSTS.MOBILE_NUMBER)}>
        {COMMON_CONSTS.MOBILE_NUMBER}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focus.focusMobileNumber)}
        onFocusInput={() => handleOnFocus(COMMON_CONSTS.MOBILE_NUMBER)}
        onBlurInput={() => handelOnBlur(COMMON_CONSTS.MOBILE_NUMBER)}
        onChangeTextFunction={handleInputMobileNumber}
        keyboardTypeTextInput={'numeric'}
      />
      {!validation.mobileNumber && credentials.mobileNumber !== '' && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_MOBILE_NUMBER}
        </Text>
      )}

      {!validation.password && credentials.password && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_PASSWORD}
        </Text>
      )}
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => handleButtonPress()}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
