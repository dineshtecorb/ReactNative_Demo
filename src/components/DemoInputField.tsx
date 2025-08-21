import React from "react";
import {TextInput,Text,StyleSheet,View, KeyboardTypeOptions} from 'react-native'




type InputFieldData = {
  data: string
  error: boolean
  placeHolder:string,
  errorMessage:string
  keyboardType:KeyboardTypeOptions,
  onChangeText: (text: string) => void;
};

const DemoInputField: React.FC<InputFieldData> = ({ data, error,placeHolder,errorMessage,keyboardType, onChangeText}) => {
  return (
    <View>
      <TextInput
        style={[styles.inputField, error && { borderColor: 'red' }]}
        value={data}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default DemoInputField;

const styles = StyleSheet.create({
  inputField: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 4,
    marginHorizontal: 20,
    borderRadius: 6,
    padding: 10,
  },
  errorText: {
    marginLeft: 25,
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
  },
});
