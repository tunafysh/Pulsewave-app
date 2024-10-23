import { useEffect, useRef } from 'react';
import { StyleSheet, Text, useColorScheme, Animated, ScrollView, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { checkFileExistsSync } from '../actions';
import { Link } from 'expo-router';
export default function HomeScreen() {
  
  const colorScheme = useColorScheme();
  const configExists = checkFileExistsSync(FileSystem.documentDirectory + "config.json");
  
  
const style = StyleSheet.create({
  homeScreenStyle: {
    width: "100%",
    height: "100%",
    paddingTop: '15%',
    paddingHorizontal: '5%',
    backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
  },
  titleBarStyle: {
    fontWeight: '900',
    fontSize: 32,
    opacity: 0,
    color: colorScheme == "dark"? "#EEF6F6": "#091111"
  }
})
  var fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <ScrollView style={style.homeScreenStyle}>
      <Animated.Text  style={[style.titleBarStyle, {opacity: fadeAnim}]}>Welcome {configExists ? "Back " : ""}<Text style={{color: colorScheme == "dark"? "#199A93": '#42C2BE'}}>Hanan</Text></Animated.Text>
      <Link href="/getting-started" style={{padding: 10}}><Button title="Go to startup" /></Link>
    </ScrollView>   
  )
}