import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, Modal, Pressable, StyleSheet, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'


const HideShowScreen: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [radio, setRadio] = useState<number>(1);

    const [statusBarHide, setStatusBarState] = useState<boolean>(false);
    const [barStyle, setBarStyle] = useState('light-content');


    const [showModal, setShowModal] = useState<boolean>(false);

    const skills = [
        {
            id: 1,
            name: 'iOS'
        },
        {
            id: 2,
            name: 'CSS'
        },
        {
            id: 3,
            name: 'JAVA'
        },

    ]

    const displayLoader = () => {
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    return (<View style={styles.main}>


        <StatusBar
            backgroundColor="#fff"
            barStyle={barStyle as 'default' | 'light-content' | 'dark-content'}
            hidden={statusBarHide}
        />
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 10 }}>Touchable component</Text>

        <View style={{marginBottom:5}}>
            <Button title={statusBarHide ? "Show Status Bar" : "Hide Status Bar"} onPress={() => setStatusBarState(!statusBarHide)} />

            </View>
            <View style={{marginTop:5}}>
            <Button title="Change Style" onPress={() => setBarStyle('dark-content')}></Button>
            </View>
       


        {/* <Button title="Show Component" onPress={()=> setShow(!show)}></Button>
        {
            show ? <VisibleView/> : null
        } */}
        <TouchableHighlight>
            <Text style={[styles.button, styles.sucess]}>Success</Text>
        </TouchableHighlight>

        {/* <TouchableHighlight>
            <Text style={[styles.button, styles.warning]}>Warning</Text>
        </TouchableHighlight>

        <TouchableHighlight>
            <Text style={[styles.button, styles.error]}>Error</Text>
        </TouchableHighlight> */}

        {/* <TouchableHighlight>
            <Text style={[styles.button, styles.primary]}>Primary</Text>
        </TouchableHighlight>

        <TouchableHighlight>
            <Text style={[styles.button]}>Button</Text>
        </TouchableHighlight> */}

        <ActivityIndicator size={30} color={'gray'} animating={show} />

        <Button title="Show Loader" onPress={displayLoader}></Button>

        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {
                skills.map((item, index) =>
                    <View style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            key={index}
                            onPress={() => setRadio(item.id)}>
                            <View style={styles.radioButton}>
                                <View style={styles.radio}>
                                    {
                                        radio === item.id ? <View style={styles.radioBg}></View>
                                            : null
                                    }
                                </View>
                                <Text style={styles.radioTitle}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>

        {/* <TouchableOpacity onPress={() => setRadio(1)}>
            <View style={styles.radioButton}>
                <View style={styles.radio}>
                    {
                        radio === 1 ? <View style={styles.radioBg}></View>
                            : null
                    }
                </View>
                <Text style={styles.radioTitle}>Radio 1</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setRadio(2)}>
            <View style={styles.radioButton}>
                <View style={styles.radio}>
                    {
                        radio === 2 ? <View style={styles.radioBg}></View>
                            : null
                    }
                </View>
                <Text style={styles.radioTitle}>Radio 2</Text>
            </View>
        </TouchableOpacity> */}

        <Pressable
            // onPress={() => { Alert.alert('On press Event') }}
            //  onLongPress={() => { Alert.alert('On long press Event') }}
            onPressIn={() => { Alert.alert('On press in Event') }}
            onPressOut={() => { Alert.alert('On press out Event') }}
        >
            <Text style={{ fontSize: 16, backgroundColor: 'red', padding: 8, color: '#fff', fontWeight: 600, textAlign: 'center', margin: 10, borderRadius: 10, shadowColor: '#000', elevation: 5 }}>Pressable</Text>
        </Pressable>


        <Modal
            transparent={true}
            visible={showModal}
            animationType='fade'
        >
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World! this is modal Demo</Text>
                    <Button title="Close" onPress={() => setShowModal(false)}></Button>
                </View>
            </View>
        </Modal>
        <View style={{ justifyContent: 'flex-end' }}>
            <Button title="Open Modal" onPress={() => setShowModal(true)}></Button>
        </View>



    </View>)
}

const VisibleView: React.FC = () => {

    useEffect(() => {
        return () => { Alert.alert('userEffect call unmount') }
        // return ()=>{console.warn('userEffect call unmount')}
    })

    return (<View>
        <Text style={{ fontSize: 35, textAlign: 'center', marginTop: 10, color: 'red' }}>Hide Show Component</Text>
    </View>)
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        backgroundColor: '#bbb',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1
    },
    sucess: {
        backgroundColor: 'green'
    },
    warning: {
        backgroundColor: 'gold'
    },
    primary: {
        backgroundColor: 'blue'
    },
    error: {
        backgroundColor: 'red'
    },
    radioButton: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    radio: { height: 40, width: 40, borderWidth: 2, borderRadius: 20, margin: 10, borderColor: 'red' },
    radioBg: { height: 30, width: 30, borderWidth: 2, borderRadius: 20, margin: 3, borderColor: 'red', backgroundColor: 'red' },
    radioTitle: { fontSize: 18, color: 'red', textAlign: 'center' },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 5
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20
    }
});

export default HideShowScreen