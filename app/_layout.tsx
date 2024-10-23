import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { checkFileExistsSync } from './actions';
import * as FileSystem from "expo-file-system"
import * as Router from "expo-router"
import "./global.css"
import { useColorScheme } from '@/hooks/useColorScheme';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const darkTheme = useTheme();
  darkTheme.colors.background= '#030707';
  darkTheme.colors.text = '#EEF6F6'

  const lightTheme = useTheme();
  lightTheme.colors.background = '#F8FCFC'
  lightTheme.colors.text = '#091111'

  
  
  if(!checkFileExistsSync(FileSystem.documentDirectory + 'config.json')){
    return (
      <ThemeProvider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="getting-started"/>
      </Stack>
      </ThemeProvider>
    )    
}
else{
  return ( 
  //   <ThemeProvider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
  // <Stack screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="(tabs)" />
  //     <Stack.Screen name="+not-found" />
  //   </Stack>
  // </ThemeProvider>
    <>
    </>
);
}
}
