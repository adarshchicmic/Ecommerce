import { SafeAreaView, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
const SignUp = () => {
  // this is for onFocus Property
  const [focus, setFocus] = useState({
    focusYourName: false,
    focusMobileNumber: false,
    focusPassword: false,
  });
  // this is for taking credentials
  const [credentials, setCredentials] = useState({
    yourName: '',
    mobileNumber: '',
    password: '',
  });
  const [validation, setValidation] = useState({
    mobileNumber: false,
    password: false,
  });
  // this is for setting credentials
  const handleInputYourName = value => {
    setCredentials({ ...credentials, yourName: value });
    console.log(credentials.yourName, 'jhksjd');
  };
  const handleInputMobileNumber = value => {
    setCredentials({ ...credentials, mobileNumber: value });
    console.log(credentials.mobileNumber, 'jhksjd');
  };
  const handleInputPassword = value => {
    setCredentials({ ...credentials, password: value });
    console.log(credentials.password, 'jhksjd');
  };

  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.YOUR_NAME) {
      setFocus({ ...focus, focusYourName: true });
    } else if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: true });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: true });
    }
  };
  const handelOnBlur = inputName => {
    if (inputName === COMMON_CONSTS.YOUR_NAME) {
      setFocus({ ...focus, focusYourName: false });
    } else if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: false });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: false });
    }
  };
  const mobileNumberRegex =
    '^(+d{1,2}s?)?1?-?.?s?(?d{3})?[s.-]?d{3}[s.-]?d{4}$';
  const passwordRegex =
    '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"';
  const validate = () => {
    if (!mobileNumberRegex.test(credentials.mobileNumber)) {
      setValidation({ ...validation, mobileNumber: true });
    } else if (!passwordRegex.test(credentials.password)) {
      setValidation({ ...validation, password: true });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text(COMMON_CONSTS.CREATE_ACCOUNT)}>
        {COMMON_CONSTS.CREATE_ACCOUNT}
      </Text>
      <Text style={styles.Text(COMMON_CONSTS.YOUR_NAME)}>
        {COMMON_CONSTS.YOUR_NAME}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focus.focusYourName)}
        onFocusInput={() => handleOnFocus(COMMON_CONSTS.YOUR_NAME)}
        onBlurInput={() => handelOnBlur(COMMON_CONSTS.YOUR_NAME)}
        onChangeTextFunction={handleInputYourName}
      />

      <Text style={styles.Text(COMMON_CONSTS.MOBILE_NUMBER)}>
        {COMMON_CONSTS.MOBILE_NUMBER}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focus.focusMobileNumber)}
        onFocusInput={() => handleOnFocus(COMMON_CONSTS.MOBILE_NUMBER)}
        onBlurInput={() => handelOnBlur(COMMON_CONSTS.MOBILE_NUMBER)}
        onChangeTextFunction={handleInputMobileNumber}
      />
      {!validation.mobileNumber ? (
        <Text style={styles.starStyle}>Enter valid Mobile Number</Text>
      ) : null}
      <Text style={styles.Text(COMMON_CONSTS.PASSWORD)}>
        {COMMON_CONSTS.PASSWORD}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focus.focusPassword)}
        onFocusInput={() => handleOnFocus(COMMON_CONSTS.PASSWORD)}
        onBlurInput={() => handelOnBlur(COMMON_CONSTS.PASSWORD)}
        onChangeTextFunction={handleInputPassword}
      />
      {!validation.mobileNumber ? (
        <Text style={styles.starStyle}>Enter valid password</Text>
      ) : null}
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => validate}
      />
    </SafeAreaView>
  );
};

export default SignUp;
