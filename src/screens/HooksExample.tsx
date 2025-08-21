import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert } from 'react-native'



const HookExampleScreen: React.FC = () => {

    const [count, setCount] = useState<number>(0)

    const [data, setData] = useState<number>(1000)

    // useEffect(() => {
    //     Alert.alert('Count Updated', `Current count is: ${count}`);
    // }, [count]);


    // useEffect(() => {
    //     Alert.alert('Count Updated', `Current count is: ${data}`);
    // }, [data]);

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}>Hooks Demo={count}</Text>
            <Button title='Update Count' onPress={() => setCount(count + 1)}></Button>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}> Component did update ={data}</Text>
            <Button title='Update Data' onPress={() => setData(data - 1)}></Button>

            <HookDataUser count={count} data={data}/>
        </View>)
}

//component with Inline porps 
const HookData = ({count, data}: { count: string; data:string}) =>{
    useEffect(() => {
        Alert.alert('Count Updated', `Current count is: ${count}`);
    }, [count]);


    useEffect(() => {
        Alert.alert('Count Updated', `Current count is: ${data}`);
    }, [data]);
   return(<View>
    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}> Component did update count ={count}</Text>
    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}> Component did update data ={data}</Text>

    </View>) 
}

//component with External Props

type HooksDataProps ={
        count:number,
        data:number 
}

const HookDataUser:React.FC<HooksDataProps> = (props) =>{
    useEffect(() => {
        Alert.alert('Count Updated', `Current count is: ${props.count}`);
    }, []);


    useEffect(() => {
        Alert.alert('Count Updated', `Current count is: ${props.data}`);
    }, []);
   return(<View>
    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}> Component did update count ={props.count}</Text>
    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}> Component did update data ={props.data}</Text>

    </View>) 
}


export default HookExampleScreen