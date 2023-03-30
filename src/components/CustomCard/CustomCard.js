import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BASE_URL, COMMON_CONSTS } from '../../shared/constants';
import styles from './styles';
const CustomCard = ({ name, photo, price }) => {
  return (
    <View style={styles.cardContainerStyle}>
      <TouchableOpacity>
        <Image
          style={styles.cardImageStyle}
          source={{ uri: `${BASE_URL}${photo}` }}
        />
        <Text style={styles.titleStyle}> {name}</Text>
        <Text style={styles.priceStyle}>₹ {price}</Text>
        <TouchableOpacity style={styles.addToCartBtnStyle}>
          <Text style={styles.addToCartBtntextStyle}>
            {COMMON_CONSTS.ADD_TO_CART}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;
