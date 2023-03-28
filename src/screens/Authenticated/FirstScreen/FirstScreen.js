import { SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import LowerScreenNavigation from '../../../navigators/LowerScreenNavigation';
const FirstScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LowerScreenNavigation />
    </SafeAreaView>
  );
};

export default FirstScreen;
