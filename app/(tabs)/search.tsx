import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, useColorScheme, Text, TextInput } from "react-native";

export default function Explore(){
  const colorScheme = useColorScheme();

  const style = StyleSheet.create({
      homeScreenStyle: {
          width: "100%",
          height: "100%",
          paddingTop: '15%',
          paddingHorizontal: '5%',
          backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
          flex: 1,
          alignItems: 'center'
        },
        searchBoxStyle: {
          width: "100%",
          marginHorizontal: "5%",
          height: 57,
          borderColor: "#199A93",
          borderWidth: 1,
          borderRadius: 7,
          alignItems: 'center',
          padding:10,
          flexDirection: 'row',
          position: 'static',
        }
  })

  return(<View style={style.homeScreenStyle}>
      <View style={style.searchBoxStyle}>
        <Ionicons name="search-outline" size={36} color={"#199A93"} style={{marginLeft: 0}} />

        <TextInput style={{width: '100%', height: "100%", fontWeight: '600', color: colorScheme === "dark"? "#EEF6F6": "#091111"}} placeholder="Search here" placeholderTextColor={"#199A93"}/>
      </View>
  </View>)
}