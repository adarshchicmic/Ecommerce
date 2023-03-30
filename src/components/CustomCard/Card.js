import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = ({ imgName, title, price, OnClickEvent, fav, toggleFav }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.favtouch} onPress={toggleFav}>
        {fav ? (
          <Image
            style={styles.heartImage}
            source={require('../assets/redheart.png')}
          />
        ) : (
          <Image
            style={styles.heartImage}
            source={require('../assets/blankHeart.png')}
          />
        )}
      </TouchableOpacity>
      <Image style={styles.cardImage} source={imgName} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.detailBtn}
        onPress={txt => OnClickEvent(txt)}
      >
        <Text style={styles.detailBtntext}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
