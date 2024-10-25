import { View, StyleSheet, useColorScheme, Text } from "react-native";

export default function CreateScreen(){
    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        homeScreenStyle: {
            width: "100%",
            height: "100%",
            paddingTop: '15%',
            paddingHorizontal: '5%',
            backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
          titleBarStyle: {
            fontWeight: '900',
            fontSize: 32,
            color: "#fd9970"
          }
    })

    return(<View style={style.homeScreenStyle}>
        <Text style={style.titleBarStyle}>Under construction</Text>
    </View>)
}