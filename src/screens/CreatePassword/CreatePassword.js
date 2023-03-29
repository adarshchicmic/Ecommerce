import { SafeAreaView, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';

const CreatePassword = ({ navigation }) => {
  const [focus, setFocus] = useState({
    focusPasswordAgain: false,
    focusPassword: false,
  });
  const [credentials, setCredentials] = useState({
    passwordAgain: '',
    password: '',
  });
  const [validation, setValidation] = useState({
    passwordAgain: false,
    password: false,
  });
  // this is for setting credentials
  const handleInputPassword = value => {
    setCredentials({ ...credentials, password: value });
    const validationPassword = COMMON_CONSTS.PASSWORD_REGEX.test(value);
    setValidation({
      ...validation,
      password: validationPassword,
    });
  };
  const handleInputNewPassword = value => {
    setCredentials({ ...credentials, passwordAgain: value });
    const validationMobileNumber = credentials.password === value;
    setValidation({
      ...validation,
      passwordAgain: validationMobileNumber,
    });
  };

  // this is for onFocus and onBlur Functionality
  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ focusPasswordAgain: false, focusPassword: true });
    } else if (inputName === COMMON_CONSTS.PASSWORD_AGAIN) {
      setFocus({ focusPassword: false, focusPasswordAgain: true });
    }
  };
  const handelOnBlur = inputName => {
    if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: false });
    } else if (inputName === COMMON_CONSTS.PASSWORD_AGAIN) {
      setFocus({ ...focus, focusPasswordAgain: false });
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
        {COMMON_CONSTS.CREATE_NEW_PASSWORD}
      </Text>

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
      <Text style={styles.Text(COMMON_CONSTS.PASSWORD)}>
        {COMMON_CONSTS.PASSWORD_AGAIN}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focus.focusPasswordAgain)}
        onFocusInput={() => handleOnFocus(COMMON_CONSTS.PASSWORD_AGAIN)}
        onBlurInput={() => handelOnBlur(COMMON_CONSTS.PASSWORD_AGAIN)}
        onChangeTextFunction={handleInputNewPassword}
      />
      {!validation.passwordAgain && credentials.passwordAgain && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.PASSWORD_DID_NOT_MATCH}
        </Text>
      )}
      {!credentials.newPassword || !credentials.password ? (
        <Text>djsfakl</Text>
      ) : null}
      <CustomButton
        btnText={COMMON_CONSTS.SAVE_CHANGES_AND_SIGN_IN}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => navigation.navigate('FirstScreen')}
      />
    </SafeAreaView>
  );
};

export default CreatePassword;
