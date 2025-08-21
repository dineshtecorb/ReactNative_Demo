import React from "react";
import { Text, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../App";
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen  ({ route }: Props){
    const { name, age , email} = route.params;
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Home Screen</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Name: {name}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Age: {age}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> Email: {email}</Text>

        </View>
    );
}

 