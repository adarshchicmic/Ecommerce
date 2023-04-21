import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';

import { useGetNameMutation, useSignInMutation } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';

import { addUserData } from '../../store /feature/userSlice';
const Login = ({ navigation }) => {
  const [focus, setFocus] = useState({
    focusMobileNumber: false,
    focusPassword: false,
  });
  const [credentials, setCredentials] = useState({
    mobileNumber: '',
    password: '',
    token: '',
  });
  const dispatch = useDispatch();
  const states = useSelector(state => state);
  console.log(states, 'STATE is');
  // console.log(number, token, 'store ka data hai ');
  const [validation, setValidation] = useState({
    mobileNumber: false,
    password: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allFilled, setAllFilled] = useState(true);
  const [signIn, signInResult] = useSignInMutation();
  const [getName, getNameResult] = useGetNameMutation();
  console.log(signInResult, 'Ye sign in ka result hai kfdsnkjkdf');
  useEffect(() => {
    if (signInResult.isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (signInResult.isLoading === false && signInResult.isSuccess === true) {
      console.log(signInResult, 'useEffect walla hai ye');
      // alert(`${signInResult.data.message}, 'Please Enter password and verify'`);
      if (signInResult.data.status === false) {
        alert(`${signInResult.data.message}, Please try again`);
      } else if (signInResult.data.status === true) {
        // navigation.navigate('FirstScreen');
        setCredentials({ ...credentials, token: signInResult.data.token });
        dispatch(
          addUserData({
            number: credentials.mobileNumber,
            token: signInResult.data.token,
          }),
        );
        console.log(credentials.token, 'ye token hai ');
      }
    }
    if (signInResult.isError) {
      alert('error');
    }
  }, [signInResult]);
  // useEffect(() => {}, [getNameResult]);
  const handlesignInButton = () => {
    if (
      !!credentials.mobileNumber &&
      !!credentials.password &&
      validation.mobileNumber &&
      validation.password
    ) {
      getName({ phone_number: credentials.mobileNumber });
      signIn({
        phone_number: credentials.mobileNumber,
        password: credentials.password,
      });
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  };
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

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.scrollViewStyle}>
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
              <Text style={styles.validationTextStyle}>
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
              secureTextEntry={true}
            />
            {!validation.password && credentials.password && (
              <Text style={styles.validationTextStyle}>
                {COMMON_CONSTS.PASSWORD_CONTAIN1}
                {COMMON_CONSTS.PASSWORD_CONTAIN2}
              </Text>
            )}
            {!allFilled ? (
              <Text style={styles.lastValidationTextStyle}>
                {COMMON_CONSTS.ENTER_ALL_FIELDS}
              </Text>
            ) : null}
            <CustomButton
              btnText={COMMON_CONSTS.SIGN_IN}
              styleBtn={styles.buttonStyle}
              styleTxt={styles.buttonTextStyle}
              onPressFunction={() => handlesignInButton()}
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
                  onPressFunction={() =>
                    navigation.navigate(COMMON_CONSTS.SIGNUP)
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Login;
