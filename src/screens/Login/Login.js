import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
const Login = ({ navigation }) => {
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
  const handleInputPassword = value => {
    setCredentials({ ...credentials, password: value });
    const validationPassword = COMMON_CONSTS.PASSWORD_REGEX.test(value);
    setValidation({
      ...validation,
      password: validationPassword,
    });
  };
  // this is for onFocus and onBlur Functionality
  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: true });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: true });
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
        {COMMON_CONSTS.SIGN_IN}
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
      />
      {!validation.mobileNumber && credentials.mobileNumber !== '' && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_MOBILE_NUMBER}
        </Text>
      )}
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
        btnText={COMMON_CONSTS.SIGN_IN}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => validate}
      />
      <View style={styles.footerView}>
        <View style={styles.doNotHaveAccountContainer}>
          <Text style={styles.textDonotHaveAccount}>
            {COMMON_CONSTS.NEED_HELP}
          </Text>
          <CustomButton
            styleBtn={styles.CreateAccountStyle}
            btnText={COMMON_CONSTS.FORGOT_PASSWORD}
            styleTxt={styles.createNewAccountStyle}
            onPressFunction={() =>
              navigation.navigate(COMMON_CONSTS.FORGOTPASSWORD)
            }
          />
        </View>
        <View style={styles.doNotHaveAccountContainer}>
          <Text style={styles.textDonotHaveAccount}>
            {COMMON_CONSTS.DONOT_HAVE_ACCOUNT}
          </Text>
          <CustomButton
            styleBtn={styles.CreateAccountStyle}
            btnText={COMMON_CONSTS.CREATE_NEW_ACCOUNT}
            styleTxt={styles.createNewAccountStyle}
            onPressFunction={() => navigation.navigate(COMMON_CONSTS.SIGNUP)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
