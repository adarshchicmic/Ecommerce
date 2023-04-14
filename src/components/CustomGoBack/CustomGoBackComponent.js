import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { BackArrow } from '../../Asset/svgIcon';
const CustomGoBackComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrowStyle} onPress={onPress}>
        <BackArrow width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomGoBackComponent;
