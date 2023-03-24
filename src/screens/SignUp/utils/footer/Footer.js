import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../../../shared/constants';
import styles from './styles';
const Footer = () => {
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => validate}
      />
      <CustomButton
        btnText={COMMON_CONSTS.ALREADY_USER_SIGNIN}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => validate}
      />
    </View>
  );
};

export default Footer;
