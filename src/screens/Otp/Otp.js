import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../shared/constants';
import { useVerifyOtpMutation } from '../../services/api';

const ForgotPassword = ({ navigation, route }) => {
  const { screen } = route.params;
  const { number } = route.params;
  console.log(screen, number, 'ye screen hai, number hai ');
  const [focusOtp, setFocusOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const [verifyOtp, verifyOtpResult] = useVerifyOtpMutation();
  // this is for setting credentials
  useEffect(() => {
    if (verifyOtpResult.isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (
      verifyOtpResult.isLoading === false &&
      verifyOtpResult.isSuccess === true
    ) {
      console.log(verifyOtpResult, 'ye verify Otp result hai');
      if (verifyOtpResult.data.response === 'success' && screen === 'signUp') {
        navigation.navigate('Login');
      } else if (
        verifyOtpResult.data.response === 'success' &&
        screen === 'forgotPassword'
      ) {
        navigation.navigate('CreateNewPassword', { number: number });
      }
    }
    if (verifyOtpResult.isError) {
      alert('error');
    }
  }, [verifyOtpResult]);
  const handleButtonPress = () => {
    verifyOtp({ otp: otp, phone_number: number });
    console.log('otp continue button pressed');
  };
  const handleInputOtp = value => {
    console.log(value, 'ye value hai ');
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
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
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
            onChangeTextFunction={handleInputOtp}
          />
          <CustomButton
            btnText={COMMON_CONSTS.CONTINUE}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleButtonPress()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ForgotPassword;
