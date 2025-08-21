import React, { useEffect, useState } from "react";
import {Alert, Button, Text,View,ScrollView,FlatList} from 'react-native'


const ApiCallScreen:React.FC = () =>{

    const [callApi, setCallApi] = useState(false)

    const [data, setData] = useState(undefined)

    const [listdata, setListData] = useState([])

    const getApiResult = async ()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts' //'https://jsonplaceholder.typicode.com/posts/1'
        let response = await fetch(url)
        let result = await response.json()
        setListData(result)
        //setData(result)
       // Alert.alert('API Result', JSON.stringify(result))

    }

    useEffect(()=>{
      getApiResult()
    },[callApi]);

    return<View style={{flex:1,alignItems:'center',justifyContent:'center',margin:20}}>
        <Text style={{fontSize:24,marginBottom:10}}>Api call Screen</Text>
        {/* 
         //MARK:- List data Item
        <ScrollView>
        
        {
            listdata.length ? listdata.map((item)=><View style={{borderBottomColor:'#ccc',borderBottomWidth:1,padding:10}}>
                <Text style={{fontSize:20,marginBottom:10,backgroundColor:'#ddd'}}>ItemID:- {item['id']}</Text>
                <Text style={{fontSize:22,marginBottom:10}}>UserID:- {item['userId']}</Text>
                <Text style={{fontSize:24,marginBottom:10}}>Title:-  {item['title']}</Text>
                <Text style={{fontSize:18,marginBottom:10}}>Body:- {item['body']}</Text>
            </View>) : <Text>Loading....</Text> 
        }
        </ScrollView> */}

        <FlatList
              //MARK:- List data Item

            data={listdata}
            renderItem={({item}) => <View style={{borderBottomColor:'#000',borderBottomWidth:1,padding:10}}>
            <Text style={{fontSize:20,marginBottom:10,backgroundColor:'red',color:'#fff'}}>ItemID:- {item['id']}</Text>
            <Text style={{fontSize:22,marginBottom:10}}>UserID:- {item['userId']}</Text>
            <Text style={{fontSize:24,marginBottom:10}}>Title:-  {item['title']}</Text>
            <Text style={{fontSize:18,marginBottom:10}}>Body:- {item['body']}</Text>
        </View>}
            keyExtractor={item => item["id"]}
       />
     
        {/* 
        //MARK:- Single data Item
        {
            data && typeof data === 'object' && data !== null ? (
                <View>
                    <Text style={{fontSize:24,marginBottom:10}}>ID: {data['id']}</Text>
                    <Text style={{fontSize:24,marginBottom:10}}>User ID: {data['userId']}</Text>
                    <Text style={{fontSize:24,marginBottom:10}}>Title: {data['title']}</Text>
                    <Text style={{fontSize:24}}>Body: { data['body']}</Text>
                    
                </View>
            ) : (
                <Text>Loading....</Text>
            )
        
        } */}
        
        <Button title="Api Call" onPress={()=>setCallApi(!callApi)}></Button>
    </View>
}

export default ApiCallScreen