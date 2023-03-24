import { View, Text } from 'react-native';
import React from 'react';
import CustomTextInput from '../../../../components/CustomTextInput/CustomTextInput';
import { COMMON_CONSTS } from '../../../../shared/constants';
import styles from './styles';
const Middle = () => {
    
  return (
    <View>
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
      {!validation.mobileNumber && credentials.mobileNumber !== '' ? (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_MOBILE_NUMBER}
        </Text>
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
      {!validation.mobileNumber && credentials.password !== '' && (
        <Text style={styles.starStyle}>
          {COMMON_CONSTS.ENTER_VALID_PASSWORD}
        </Text>
      )}
      {!credentials.yourName &&
        !credentials.mobileNumber &&
        !credentials.password && <Text>Enter necessary details</Text>}
    </View>
  );
};

export default Middle;
