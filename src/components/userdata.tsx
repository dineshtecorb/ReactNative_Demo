import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CompanyData from './companydata';


type UserProps = {
    name: string;
    age?: number; // optional prop
  };

const UserData: React.FC<UserProps> = ({ name, age}) => {
    return(
        <View style={styles.container}>
          <Text>Name: {name}</Text>
          <Text>Age: {age ?? 'N/A'}</Text>
          <CompanyData/>
        </View>
      );
};

  

export default UserData

const styles = StyleSheet.create({
    container:{
        padding:16,
    }
});