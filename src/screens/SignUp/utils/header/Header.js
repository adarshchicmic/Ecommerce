import { View, Text } from 'react-native';
import React from 'react';
import { COMMON_CONSTS } from '../../../../shared/constants';
import styles from './styles';
const Header = () => {
  return (
    <View>
      <Text style={styles.Text(COMMON_CONSTS.CREATE_ACCOUNT)}>
        {COMMON_CONSTS.CREATE_ACCOUNT}
      </Text>
    </View>
  );
};

export default Header;
