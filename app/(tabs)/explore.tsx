import { View, StyleSheet, useColorScheme } from "react-native";

export default function Explore(){
    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        homeScreenStyle: {
            width: "100%",
            height: "100%",
            paddingTop: '15%',
            paddingHorizontal: '5%',
            backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
          },
    })

    return(<View style={style.homeScreenStyle}>
        
    </View>)
}