import React,{Component} from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";


type StudentState = {
  name: string;
};

class Student extends Component<StudentState>{
    checkFunc = () =>{
        Alert.alert('TouchableOpacity pressed!');  
    }
    render(){
      return(<View>
        <Text style={{fontSize:24,color:'green',marginTop:20}}>{this.props.name}</Text>
        {/* <TextInput style={{fontSize:18, color:'black', borderWidth:1, borderColor:'lightgreen', margin:10}} placeholder='Enter your name'></TextInput> */}
        <Button title='Press Me' onPress={()=>this.checkFunc()}></Button>
      </View>);
    }
  }
  
  export default Student