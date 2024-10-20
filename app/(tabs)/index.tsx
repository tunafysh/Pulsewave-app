import { Image, StyleSheet, Platform, Text, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native';
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
    color: colorScheme == "dark"? "#EEF6F6": ""
  }
})

  return (
    <ScrollView style={style.homeScreenStyle}>
      <Text style={style.titleBarStyle}>Welcome <Text style={{color: '#199A93'}}>Hanan</Text></Text>
    </ScrollView>   
  );
}