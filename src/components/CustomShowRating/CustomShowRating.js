import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { EmptyStar, FilledStar } from '../../Asset/svgIcon';
import styles from './styles';
const CustomShowRating = ({ rating = 0 }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(index => (
        <TouchableOpacity key={index} activeOpacity={0.7}>
          {index <= rating ? (
            <FilledStar width={25} height={50} />
          ) : (
            <EmptyStar width={25} height={50} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomShowRating;
