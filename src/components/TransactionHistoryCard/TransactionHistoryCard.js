import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const TransactionHistoryCard = ({ productName, paidStatus, date }) => {
  console.log(paidStatus, 'ye paid status hai');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{productName}</Text>
      <Text style={styles.textStyle}>{date}</Text>
      <Text style={styles.textStyle}>Paid : {String(paidStatus)}</Text>
    </View>
  );
};

export default TransactionHistoryCard;
