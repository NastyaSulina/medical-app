import React from "react";
import { TextInput } from "react-native";
import styles from "./Input-styles";

const Input = ({placeholderText}) => {
  const [text, onChangeText ] = React.useState(undefined);

  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder= {placeholderText}
        placeholderTextColor = "#9FAABB"
      />
  );
};

export default Input;