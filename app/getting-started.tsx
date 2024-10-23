import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

export default function GettingStartedScreen() {
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
            color: useColorScheme() == "dark"? "#EEF6F6": "#091111"
        }
    })
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.titleBar}>Welcome</Text>
        </View>
    );
}