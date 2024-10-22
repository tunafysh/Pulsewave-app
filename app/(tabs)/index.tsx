import { useEffect, useRef } from 'react';
import { StyleSheet, Text, useColorScheme, Animated, ScrollView, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';


function checkFileExistsSync(filePath: string) {
  let fileExists = false;
  
  const checkFile = async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      fileExists = fileInfo.exists;
    } catch (error) {
      console.error("Error checking file existence:", error);
    }
  };
  
  checkFile().then(() => {
    console.log(`File exists: ${fileExists}`);
  });
  
  return fileExists;
}

const createFile = async () => {
  try {
    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + "config.json", `{\n dark: ${useColorScheme() === 'dark'},\n username: "Hanan"\n}\n`, { encoding: FileSystem.EncodingType.UTF8 });
  } catch (error) {
    console.error("Error creating file:", error);
  }
}


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
    </ScrollView>   
  );
}