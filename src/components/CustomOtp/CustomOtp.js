import { SafeAreaView, View, TextInput } from 'react-native';
import React, { useRef, useEffect } from 'react';

import styles from './styles';

const CustomOtp = () => {
  const widthPer = 90 / 4;

  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        {new Array(4).fill(0).map((item, index) => (
          <TextInput maxLength={1} style={styles.TextInputStyle(widthPer)} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CustomOtp;
