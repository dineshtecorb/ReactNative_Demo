import React from "react";
import { View, StyleSheet, FlatList, Text, ScrollView,SectionList } from 'react-native'
//import UserData from "../components/userdata";


const UserDataListScreen: React.FC = () => {

    const users = [
        { id: 1, name: 'Nakul', email: 'nakul@tecorb.co',data:['PHP','HTML','ANGULAR'] },
        { id: 2, name: 'Dinesh', email: 'dinesh@tecorb.co', data:['SWIFT','FLUTTER','REACT NATIVE'] },
        { id: 3, name: 'Jai', email: 'jai@tecorb.co',data:['ROR','BOOTSTRAP','DEVOOPS'] },
        { id: 4, name: 'Rishab', email: 'rishab@tecorb.co',data:['PHYTHON','ARTIFICIAL INTELIGENCE','PHP'] },
        // { id: 5, name: 'Nakul', email: 'nakul@tecorb.co' },
        // { id: 6, name: 'Dinesh', email: 'dinesh@tecorb.co' },
        // { id: 7, name: 'Jai', email: 'jai@tecorb.co' },
        // { id: 8, name: 'Rishab', email: 'rishab@tecorb.co' },
        // { id: 9, name: 'Nakul', email: 'nakul@tecorb.co' },
        // { id: 10, name: 'Dinesh', email: 'dinesh@tecorb.co' },
        // { id: 11, name: 'Jai', email: 'jai@tecorb.co' },
        // { id: 12, name: 'Rishab', email: 'rishab@tecorb.co' },
    ]

    return (
        <View>
            <Text style={{fontSize:30,backgroundColor:'black',color:'white'}}>Flat List</Text>
            <SectionList sections={users}
             renderItem={({item})=><Text style={styles.item}>{item}</Text>}
             renderSectionHeader={({section:{name}})=><Text style={{fontSize:25, color:'red',marginLeft:10,fontFamily:'Roboto-semibold.ttf'}}>{name}</Text>}/>
                
        {/* <FlatList
            data={users}
            renderItem={({item}) => <UserData item={item} />}
            keyExtractor={item => item.id.toString()}
       /> */}

            {/* <Text style={{ fontSize: 30 }}>Custom scrollable List</Text>
            <ScrollView>
                {users.map((item) => <UserData item={item}/>)}
            </ScrollView> */}

        </View>
    );
}

type UserDataProps = {
    item: {
        id: number;
        name: string;
        email: string;
    };
};

const UserData: React.FC<UserDataProps> = ({ item }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
    },
    item: {
        fontSize: 16,
        color: 'black',
         marginLeft: 20,
        flex: 1,
        padding:1
       // backgroundColor: 'green',
        // margin: 10,
        // borderWidth: 1,
        // borderColor: 'yellow',
        // textAlign: 'center',
        // textAlignVertical: 'center'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
         flexWrap: 'wrap',
        borderColor:'orange',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:10
    },

});

export default UserDataListScreen