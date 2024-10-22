import { View, StyleSheet, useColorScheme, Text } from "react-native";

export default function NotificationScreen(){
    const colorScheme = useColorScheme();

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
            color: colorScheme == "dark"? "#EEF6F6": ""
          }
    })

    return(
    <View style={style.homeScreenStyle}>
        <Text style={style.titleBarStyle}>Notifications</Text>    
    </View>
    )
}