/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import React, { Component } from 'react';

import { Alert, Button, StatusBar, Text, useColorScheme, View, StyleSheet, TextInput } from 'react-native';
// import UserData from './src/components/userdata';
// import React, { useState } from 'react';



import { SafeAreaView } from 'react-native'
import UserDataListScreen from './src/screens/itemlist'
import Student from './src/components/Student';
import HookExampleScreen from './src/screens/HooksExample'
import HideShowScreen from './src/screens/HideShowScreen'
import WebViewScreemDemo from './src/screens/WebviewScreen';
import WebView from 'react-native-webview';
import CustomModalScreen from './src/screens/CustomModal';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Logincreen from './src/screens/AuthScreens/LoginScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ApiCallScreen from './src/screens/APICallScreen';


// import GridViewListScreen from './src/screens/gridviewscreen';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   const [count, setCount] = useState<number>(0);

//   const [username, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const [display, setDisplay] = useState<boolean>(false);


//   const [passVisible, setVisible] = useState<boolean>(false);


//   const resetFormData=()=>{
//   setDisplay(false);
//   setEmail('');
//   setName('');
//   setPassword('');
//   }

//   return (
//     <View style= {styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       {/* <NewAppScreen templateFileName="App.tsx" /> */}
//       <Text style={{fontSize: 30}}>Component</Text>
//     {/* <UserData name={username} age={count}/>
//      <Button title='Press Okay' onPress={fruits} color={'green'} /> 

//      <Button title='Press Send' onPress={()=>fruits('Dinesh')} color={'red'}/> 

//      <Text style={{fontSize: 30}}>{count}</Text>
//      <Button title='Press count' onPress={()=>setCount(count+1)} color={'black'}/> 
//      <Button title='Press Name' onPress={()=>setName('Nakul Sharma')} color={'black'}/>  */}
//      <Text style={{fontSize: 30}}>Your name is : {username}</Text>
//       <TextInput
//       style = {styles.textInput}
//       placeholder='Enter your name'
//       value={username}
//       onChangeText={(text)=>setName(text)}
//       />


// <TextInput
//       style = {styles.textInput}
//       placeholder='Enter your email'
//       value={email}
//       keyboardType={'email-address'}
//       onChangeText={(text)=>setEmail(text)}
//       />


// <TextInput
//       style = {styles.textInput}
//       placeholder='Enter your password'
//       value={password}
//       secureTextEntry={true}
//       onChangeText={(text)=>setPassword(text)}

//       />
//       <View style={{marginBottom:10}}>
//       <Button color={'red'} title='Print Details' onPress={()=>setDisplay(true)}/>
//       </View>

//       <Button title='Clear Details' onPress={()=>resetFormData()}/>

//       <View>
//         {
//           display ? <View>
//             <Text>User Name: {username}</Text>
//             <Text>User Email: {email}</Text>
//             <Text>User Password: {password}</Text>
//           </View> : null
//         }
//       </View>

//     </View>
//   );
// }

// const fruits = (_val: any):void => {
//   Alert.alert('TouchableOpacity pressed!');
// };


// export default App;


// const styles = StyleSheet.create({
//   container: { flex: 0, justifyContent: 'center'},
//   button: { padding: 10, backgroundColor: 'skyblue', borderRadius: 5 },
//   text: { color: 'white', fontWeight: 'bold' },
//   textInput:{fontSize:18, color:'black', borderWidth:1, borderColor:'lightgreen', margin:10}
// });

export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigation/>
      {/* <MyTabNavigation/> */}
      {/* <MyTopTabNavigation/> */}
    </NavigationContainer>
    //   {/* <UserDataListScreen/> */}
    //   {/* <GridViewListScreen/> */}
    //   {/* <HookExampleScreen/> */}
    //   {/* <HideShowScreen/> */}
    //   {/* <WebViewScreemDemo/> */}
    //   {/* <CustomModalScreen/> */}

    // </SafeAreaView>
  );
}

//MARK:- Top Tab Navigation
const TopTab = createMaterialTopTabNavigator();

const MyTopTabNavigation =()=>{
  return(<TopTab.Navigator screenOptions={{
    tabBarStyle: {
      backgroundColor: 'lightgrey',
    },
    tabBarActiveTintColor: 'white',
    tabBarLabelStyle: {
      fontSize: 18,
      color: 'white',
    },
  }}>
      <TopTab.Screen name='Login' component={LoginView}></TopTab.Screen>
      <TopTab.Screen name='Home' component={HomeView}></TopTab.Screen>
      <TopTab.Screen name='ApiCall' component={ApiCallScreen}></TopTab.Screen>
  </TopTab.Navigator>);
}

//MARK:-  Bottom Tab Navigation
const Tab = createBottomTabNavigator()

const MyTabNavigation =()=>{
  return(<Tab.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#000'    
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontSize:18,
      color:'white'
    }
  }}>
      <Tab.Screen name='Login' component={LoginView}></Tab.Screen>
      <Tab.Screen name='Home' component={HomeView}></Tab.Screen>
  </Tab.Navigator>);
}

const LoginView:React.FC =()=>{
  return(<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Login View</Text>
  </View>)
}

const HomeView:React.FC =()=>{
  return(<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Home View</Text>
  </View>)
}

//MARK:- Stack Navigation
export type RootStackParamList = {
  Login:undefined
  Home: { 
      name:string,
      age:number,
      email:string
       };
  // other screens...
};

const Stack = createNativeStackNavigator<RootStackParamList>()
const MyStackNavigation =()=>{
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#000'    
      },
      headerTintColor:'white',
      headerTitleStyle:{
        fontSize:18,
        color:'white'
      }
    }} >
    <Stack.Screen name='Login' component={Logincreen} options={{title:'Login Screen',headerTitleStyle:{fontSize:18,color:'white'}}}/>
    <Stack.Screen name='Home' 
    component={HomeScreen}
     options={{
      title:'Home Screen',
      //headerLeft:()=><Button title='Show'></Button>,
      // headerRight:()=><Button title='Hide'></Button>
      }
      }
       />
  </Stack.Navigator>
  )
}



//MARK:- Class Component

// type MyState = {
//   name: string;
// };

// class App extends Component<MyState> {
//   state: MyState = {
//     name: 'Anil',
//   };

//   increment = (value: string) => {
//     this.setState({ name: value });
//   };


//   render() {
//     return (<View>
//       <Text style={{ fontSize: 24, color: 'red' }}>Class Components</Text>
//       <TextInput style={{ fontSize: 18, color: 'black', borderWidth: 1, borderColor: 'lightgreen', margin: 10 }} placeholder='Enter your name' value={String(this.state.name)} onChangeText={(text) => this.increment(text)}></TextInput>
//       <Button title='Press Me'></Button>
//       <Student name={this.state.name}/>
//     </View>);
//   }
// }

// export default App