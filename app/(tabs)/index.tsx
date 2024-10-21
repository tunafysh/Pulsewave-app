import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Platform, Text, useColorScheme, Animated } from 'react-native';
import { ScrollView } from 'react-native';
import { useAnimatedStyle } from 'react-native-reanimated';
export default function HomeScreen() {

  const colorScheme = useColorScheme();
  
const style = StyleSheet.create({
  homeScreenStyle: {
    width: "100%",
    height: "100%",
    paddingTop: '15%',
    paddingHorizontal: '5%',
    backgroundColor: colorScheme === 'dark' ? '#030707' : '#FFF',
  },
  titleBarStyle: {
    fontWeight: '900',
    fontSize: 32,
    opacity: 0,
    color: colorScheme == "dark"? "#EEF6F6": ""
  }
})
  var fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <ScrollView style={style.homeScreenStyle}>
      <Animated.Text  style={[style.titleBarStyle, {opacity: fadeAnim}]}>Welcome <Text style={{color: '#199A93'}}>Hanan</Text></Animated.Text>
    </ScrollView>   
  );
}