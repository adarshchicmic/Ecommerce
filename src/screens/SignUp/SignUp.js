import { SafeAreaView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
import { useSignUpMutation, useSignInMutation } from '../../services/api';
import { useGetAllProductsQuery, useGetProductQuery } from '../../services/api';
const SignUp = ({ navigation }) => {
  const [focus, setFocus] = useState({
    focusYourName: false,
    focusMobileNumber: false,
    focusPassword: false,
    focusOtp: false,
  });
  const [showOtp, setShowOtp] = useState(false);
  const [credentials, setCredentials] = useState({
    yourName: '',
    mobileNumber: '',
    password: '',
    otp: '',
  });
  const [validation, setValidation] = useState({
    mobileNumber: false,
    password: false,
  });
  const [allfilled, setAllFilled] = useState(true);

  const [signUp, signUpResult] = useSignUpMutation();
  useEffect(() => {
    if (signUpResult.isLoading === false && signUpResult.isSuccess === true) {
      if (signUpResult.data.status === 200) {
        navigation.navigate('Otp', {
          number: credentials.mobileNumber,
          name: credentials.yourName,
        });
      } else if (signUpResult.data.status === 401) {
        alert(`${signUpResult.data.message}, 'Please SignIn'`);
      }
      console.log(signUpResult, 'useEffect walla hai ye');
    }
  }, [signUpResult]);

  const handleSubmit = () => {
    // signUp({
    //   phone_number: credentials.mobileNumber,
    //   name: credentials.yourName,
    //   password: credentials.password,
    //   detail: 0,
    // });
    if (
      !!credentials.yourName &&
      !!credentials.mobileNumber &&
      !!credentials.password &&
      validation.mobileNumber &&
      validation.password
    ) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  };
  // this is for setting credentials and validation
  const handleInputYourName = value => {
    setCredentials({ ...credentials, yourName: value });
    console.log(credentials.yourName, 'jhksjd');
  };
  const handleInputMobileNumber = value => {
    const validationMobileNumber = COMMON_CONSTS.MOBILE_REGEX.test(value);
    setValidation({ ...validation, mobileNumber: validationMobileNumber });
    setCredentials({ ...credentials, mobileNumber: value });
  };
  const handleInputPassword = value => {
    setCredentials({ ...credentials, password: value });
    const validationPassword = COMMON_CONSTS.PASSWORD_REGEX.test(value);
    setValidation({ ...validation, password: validationPassword });
  };
  const handleInputOtp = value => {
    setCredentials({ ...credentials, otp: value });
    setValidation({ ...validation, otp: false });
  };
  // this is for onFocus and onBlur
  const handleOnFocus = inputName => {
    if (inputName === COMMON_CONSTS.YOUR_NAME) {
      setFocus({
        focusMobileNumber: false,
        focusPassword: false,
        focusYourName: true,
      });
    } else if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({
        focusMobileNumber: true,
        focusPassword: false,
        focusYourName: false,
      });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({
        focusMobileNumber: false,
        focusPassword: true,
        focusYourName: false,
      });
    }
  };
  const handelOnBlur = inputName => {
    if (inputName === COMMON_CONSTS.YOUR_NAME) {
      setFocus({ ...focus, focusYourName: false });
    } else if (inputName === COMMON_CONSTS.MOBILE_NUMBER) {
      setFocus({ ...focus, focusMobileNumber: false });
    } else if (inputName === COMMON_CONSTS.PASSWORD) {
      setFocus({ ...focus, focusPassword: false });
    } else if (inputName === COMMON_CONSTS.OTP) {
      setFocus({ ...focus, focusOtp: false });
    }
  };

  const validate = () => {
    credentials.yourName ||
      credentials.mobileNumber ||
      (credentials.password && setAllFilled(true));
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
      {!validation.password && credentials.password !== '' && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_PASSWORD}
        </Text>
      )}

      {!allfilled ? <Text>djsfakl</Text> : null}
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => handleSubmit()}
      />
      <View style={styles.doNotHaveAccountContainer}>
        <Text style={styles.textDonotHaveAccount}>
          {COMMON_CONSTS.ALREADY_HAVE_AN_ACCOUNT}
        </Text>
        <CustomButton
          styleBtn={styles.CreateAccountStyle}
          btnText={COMMON_CONSTS.SIGN_IN}
          styleTxt={styles.createNewAccountStyle}
          onPressFunction={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
