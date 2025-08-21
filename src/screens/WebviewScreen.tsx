import React, { useState } from "react";
import { Button, SafeAreaView, View } from 'react-native'
import WebView from 'react-native-webview';


const WebViewScreemDemo: React.FC = () => {
    const [showWebView, setWebView] = useState(false)
    return (<SafeAreaView style={{ flex: 1 }}>
        {/* <Text style={{fontSize:20,textAlign:'center'}}>WebView Demo</Text> */}
        {
            showWebView ? <WebView
                source={{ uri: 'https://www.npmjs.com/package/react-native-webview' }}
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                mixedContentMode="always"
                onLoadStart={() => console.log('Page started loading')}
                onLoadEnd={() => console.log('Page finished loading')}
            /> : <Button title="show web View" onPress={() => setWebView(true)} />
        }

    </SafeAreaView>);
}
export default WebViewScreemDemo