import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../../shared/constants';
import styles from './styles';
const Profile = () => {
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.LOGOUT}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
      />
    </View>
  );
};

export default Profile;
