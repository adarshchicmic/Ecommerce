import { View, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = ({
  onChangeTextFunction = () => {},
  inputTextPlaceholder,
  styleInputText,
  valueTextInput,
  keyboardTypeTextInput,
  autoCapitalizeTextInput,
  customInputTextOuterStyle,
  onFocusInput,
  onBlurInput,
  placeholderTextColor,
  editable,
}) => {
  return (
    <View style={customInputTextOuterStyle}>
      <TextInput
        style={styleInputText}
        placeholder={inputTextPlaceholder}
        onChangeText={onChangeTextFunction}
        value={valueTextInput}
        keyboardType={keyboardTypeTextInput}
        autoCapitalize={autoCapitalizeTextInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default CustomTextInput;
