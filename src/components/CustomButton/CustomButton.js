import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
  styleBtn,
  styleTxt,
  btnText,
  viewStyleButton,
  onPressFunction = () => {},
}) => {
  return (
    <View style={viewStyleButton}>
      <TouchableOpacity style={styleBtn} onPress={onPressFunction}>
        <Text style={styleTxt}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
