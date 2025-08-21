import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../App";
import DemoInputField from "../../components/DemoInputField";


type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Logincreen({ navigation }: Props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')


    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const [addressError, setAddressError] = useState(false)


    const data = {
        name: name,
        email: email,
        age: Number(age),
        address: address
    }



    const saveData = async () => {
        
        !name ? setNameError(true) : setNameError(false);
        if(!name){
            return;
        }
        !age ? setAgeError(true) : setAgeError(false)
        if(!age){
            return;
        }
        !email ? setEmailError(true) : setEmailError(false)
        if(!email){
            return;
        }
        !address ? setAddressError(true) : setAddressError(false)
        if(!address){
            return;
        }

        const url = 'http://10.0.2.2:3000/user'
        let result = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(data)
        })
        result = await result.json();
        if(result){
            setName('')
            setAge('')
            setEmail('')
            setAddress('')
             navigation.navigate('Home', { name: name, age: Number(age), email: email }) 

        }
    }



    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Login Screen</Text>
            <View style={{ width: 400, flexDirection: 'column' }}>

                
                <DemoInputField
                    data={name}
                    error={nameError}
                    placeHolder={"Enter your name"}
                    errorMessage={"Please Enter Your Name!"}
                    onChangeText={(text) => setName(text)} keyboardType={"default"} />

                <DemoInputField
                    data={age}
                    error={ageError}
                    placeHolder={"Enter Your Age"}
                    errorMessage={"Please Enter Your Age!"}
                    onChangeText={(text) => setAge(text)} keyboardType={'number-pad'} />

                <DemoInputField
                    data={email}
                    error={emailError}
                    placeHolder={"Enter Your Email"}
                    errorMessage={"Please Enter Your Email!"}
                    onChangeText={(text) => setEmail(text)} keyboardType={'email-address'} />


                <DemoInputField
                    data={address}
                    error={addressError}
                    placeHolder={"Enter Your Address"}
                    errorMessage={"Please Enter Your Address!"}
                    onChangeText={(text) => setAddress(text)} keyboardType={"default"} />

            </View>
            <View style={{width:360,marginTop:20}}>
            <Button
                title="Login"
                onPress={() =>
                    saveData()
                    // navigation.navigate('Home', { name: name, age: Number(age), email: email })
                }
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputField: {
        fontSize: 16,
        // flex: 1,
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 4,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        padding: 10
    },
    errorText: {
        marginLeft: 25,
        fontSize: 14,
        fontWeight: 500,
        color: 'red'
    }
})
