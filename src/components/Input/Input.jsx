import React from "react";
import { TextInput } from "react-native";
import styles from "./Input-styles";

const Input = ({placeholderText}) => {
  const [text, onChangeText ] = React.useState(null);

  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={undefined}
        placeholder= {placeholderText}
        placeholderTextColor = "#9FAABB"
      />
  );
};

export default Input;