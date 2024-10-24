import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, useColorScheme, Animated, ScrollView, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { checkFileExistsSync, readConfig } from '../actions';
import * as Router from 'expo-router';
import Card from '@/components/Card';
export default function HomeScreen() {

  const colorScheme = useColorScheme();
  const configExists = checkFileExistsSync(FileSystem.documentDirectory + "config.json");
  const [title, setTitle] = useState(["", ""]);
  
  
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
    marginBottom: 30,
    color: colorScheme == "dark"? "#EEF6F6": "#091111",
    borderBottomColor: colorScheme === 'dark' ? '#EEF6F6' : '#F8FCFC',
  }
})

  var fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTitle(["Welcome ", "Hanan"]);
    setTimeout(() => {
      setTitle(["Pulse", "wave"]);
    }, 3500);
    Animated.sequence([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          delay: 2000,
          duration: 750,
          useNativeDriver: true,
        }
      ),

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }
      ),
    ]).start();
  }, [fadeAnim]);
  return (
    <View style={{paddingTop: '15%', backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC'}}>
<View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 0}}>
<Animated.Text style={[style.titleBarStyle, { opacity: fadeAnim, paddingLeft: "5%" }]}>
    <Animated.Text>
        {title[0]}
    </Animated.Text>
    <Animated.Text style={{ color: colorScheme == "dark" ? "#199A93" : '#42C2BE' }}>
        {title[1]}
    </Animated.Text>
</Animated.Text>

</View>
    <ScrollView style={style.homeScreenStyle}>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
      <Card image={false}>This is a test just to show it works perfectly (i think)</Card>
    </ScrollView>   
  </View>
  )
}