import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { EmptyStar, FilledStar } from '../../Asset/svgIcon';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentRating } from '../../store /feature/ProductSlice';

const RatingComponent = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const dispatch = useDispatch();
  const handleRating = newRating => {
    setRating(newRating);
    dispatch(setCurrentRating({ currentRating: newRating }));
  };
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(index => (
        <TouchableOpacity
          key={index}
          onPress={() => handleRating(index)}
          activeOpacity={0.7}
        >
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

export default RatingComponent;
