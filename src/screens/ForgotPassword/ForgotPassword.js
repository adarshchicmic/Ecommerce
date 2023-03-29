import { SafeAreaView, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
const ForgotPassword = ({ navigation }) => {
  const [focus, setFocus] = useState({
    focusMobileNumber: false,
    focusPassword: false,
  });
  const [credentials, setCredentials] = useState({
    mobileNumber: '',
    password: '',
  });
  const [validation, setValidation] = useState({
    mobileNumber: false,
    password: false,
  });
  // this is for setting credentials
  const handleInputMobileNumber = value => {
    setCredentials({ ...credentials, mobileNumber: value });
    const validationMobileNumber = COMMON_CONSTS.MOBILE_REGEX.test(value);
    setValidation({
      ...validation,
      mobileNumber: validationMobileNumber,
    });
  };

  // this is for onFocus and onBlur Functionality
  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ focusPassword: false, focusMobileNumber: true });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ focusMobileNumber: false, focusPassword: true });
    }
  };
  const handelOnBlur = inputName => {
    if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: false });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: false });
    }
  };

  const validate = () => {
    navigation.navigate('CreateNewPassword');
    if (!COMMON_CONSTS.MOBILE_REGEX.test(credentials.mobileNumber)) {
      setValidation({
        ...validation,
        mobileNumber: true,
      });
    } else if (!COMMON_CONSTS.PASSWORD_REGEX.test(credentials.password)) {
      setValidation({
        ...validation,
        password: true,
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

      {!credentials.yourName ||
      !credentials.mobileNumber ||
      !credentials.password ? (
        <Text>djsfakl</Text>
      ) : null}
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => navigation.navigate('CreateNewPassword')}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
