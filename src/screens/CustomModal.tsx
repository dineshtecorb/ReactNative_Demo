import React, { useState } from "react";
import {Button, Text, View,StyleSheet} from 'react-native'


const CustomModalScreen:React.FC = () =>{
    const [show, setShow] = useState(false)
    return (<View style={styles.container}>
        {
            show ? <View style={styles.modal}>
            <View style={styles.body}>
                <Text>Show Modal</Text>
                <Button title='Close Dailouge' onPress={()=>setShow(false)}></Button>
                </View>
                </View>: null   
        }
         
        <Button title='Open Dailouge'  onPress={()=>setShow(true)}></Button>
    
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end'
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(47,47,47,0.5)',
        justifyContent:'center',
        alignItems:'center',
    },
    body:{
        backgroundColor:'#fff',
        height:300,
        width:300,
        padding:20,
        borderRadius:10,
        justifyContent:'center'

    }
})

export default CustomModalScreen