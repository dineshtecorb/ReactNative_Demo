import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const GridViewListScreen: React.FC = () => {

    const users = [
        { id: 1, name: 'Nakul' },
        { id: 2, name: 'Dinesh' },
        { id: 3, name: 'Jai' },
        { id: 4, name: 'Rishab' },
        { id: 5, name: 'Nakul' },
        { id: 6, name: 'Dinesh' },
        { id: 7, name: 'Jai' },
        { id: 8, name: 'Rishab' },
        { id: 9, name: 'Nakul' },
        { id: 10, name: 'Dinesh' },
        { id: 11, name: 'Jai' },
        { id: 12, name: 'Rishab' },
        { id: 1, name: 'Nakul' },
        { id: 2, name: 'Dinesh' },
        { id: 3, name: 'Jai' },
        { id: 4, name: 'Rishab' },
        { id: 5, name: 'Nakul' },
        { id: 6, name: 'Dinesh' },
        { id: 7, name: 'Jai' },
        { id: 8, name: 'Rishab' },
        { id: 9, name: 'Nakul' },
        { id: 10, name: 'Dinesh' },
        { id: 11, name: 'Jai' },
        { id: 12, name: 'Rishab' },
    ]
    return (
        <View>
            <Text style={{ fontSize: 30 }}>GRIDVIEW LIST</Text>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {users.map((item) => <Text style={styles.item}>{item.name}</Text>)}
                </View>
            </ScrollView>
        </View>
    );
}

export default GridViewListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
    },
    item: {
        fontSize: 20,
        color: 'white',
        padding: 10,
        backgroundColor: 'green',
        margin: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 100,
        height: 100
    },
});