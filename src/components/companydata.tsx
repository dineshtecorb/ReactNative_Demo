import { View, Text, StyleSheet, } from "react-native";
import React from "react";


const CompanyData : React.FC = () => { 
    return(<View style = {styles.container}>
        <Text>Name: Tecorb Technologies</Text>
        <Text>Strength: 30</Text>
        <Text>Product:  ABC Product</Text>
    </View>);
};

export default CompanyData


const styles = StyleSheet.create({
    container:{
        
        padding:10
    }
});