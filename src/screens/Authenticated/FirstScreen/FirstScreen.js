import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import LowerScreenNavigation from '../../../navigators/LowerScreenNavigation';
import StatusBarr from '../../../components/StatusBar/StatusBar';
import CustomGoBackComponent from '../../../components/CustomGoBack/CustomGoBackComponent';
import CustomGoWithoutBack from '../../../components/CustomStatusWithoutBack/CustomStatusWithoutBack';
const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBarr backgroundColor={'#9ad3db'} />
      <CustomGoWithoutBack />
      <LowerScreenNavigation />
    </View>
  );
};

export default FirstScreen;
