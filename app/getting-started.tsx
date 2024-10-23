import React from "react";
import { View, Text, StyleSheet, useColorScheme, Button, Pressable, TextInput } from "react-native";
import { checkFileExistsSync, createConfig, deleteConfig } from "./actions";
import * as Router from "expo-router"
import * as FileSystem from "expo-file-system"

export default function GettingStartedScreen() {
    const [username, setUsername] = React.useState<string>("");

    const styles = StyleSheet.create({
        mainScreen: {
            width: '100%',
            height: '100%',
            paddingTop: '15%',
            paddingHorizontal: '5%',
            backgroundColor: useColorScheme() === 'dark' ? '#030707' : '#F8FCFC',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            color: useColorScheme() == "dark"? "#EEF6F6": "#091111"
        },
        titleBar: {
            fontWeight: '900',
            fontSize: 32,
            color: useColorScheme() == "dark"? "#EEF6F6": "#091111",
            marginBottom: 30
        },
        usernameInput: {
            backgroundColor: useColorScheme() == "dark"? "#091111": "#EEF6F6",
            color: useColorScheme() == "dark"? "#3DBDB8": "#42C2BE",
            
            padding: 10,
            borderStyle: 'solid',
            borderColor: useColorScheme() == "dark"? "#3DBDB8": "#42C2BE",
            borderWidth: 1,
            borderRadius: 7,
            width: 300,
            textAlign: 'center',
            marginBottom: 20,
            height: 50
        },
        startBtn: {
            backgroundColor: useColorScheme() == "dark"? "#3DBDB8": "#42C2BE",
            color: useColorScheme() == "dark"? "#EEF6F6": "#091111",
            padding: 10,
            borderRadius: 7,
            width: 300,
            marginBottom: 10,
            textAlign: 'center',
            height: 50
        }
    })
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.titleBar}>Welcome to Pulse<Text style={{color: useColorScheme() == "dark"? "#3DBDB8": "#42C2BE"}}>wave</Text></Text>
            <Text style={{color: useColorScheme() == "dark"? "#EEF6F6": "#091111", marginBottom: 30}}>This is a short quick start to get you up and running or whatever. This will take less than a minute.</Text>
            <TextInput style={styles.usernameInput} placeholderTextColor={useColorScheme() == "dark"? "#3DBDB8": "#42C2BE"} onChangeText={setUsername} placeholder="Enter your username"></TextInput>
            <Pressable onPress={() => {
                console.log(username)
                if(username == "") return
                if(checkFileExistsSync(FileSystem.documentDirectory + "config.json")){
                    deleteConfig()    
                }
                createConfig(username)
                Router.router.push("/")
            }} style={styles.startBtn}><Text style={{width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center'}}>Get started</Text></Pressable>
            <Text style={{color: useColorScheme() == "dark"? "#EEF6F6": "#091111"}}> By continuing, you agree to the <Text style={{color: useColorScheme() == "dark"? "#3DBDB8": "#42C2BE"}}>Terms and Conditions</Text>.</Text>
        </View>
    );
}