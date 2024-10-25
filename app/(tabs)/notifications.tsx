import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, useColorScheme, Text } from "react-native";

export default function NotificationScreen(){
    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        NotificationScreen: {
            width: "100%",
            height: "100%",
            paddingTop: '15%',
            backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
          },
          titleBarStyle: {
            fontWeight: '900',
            paddingHorizontal: "5%",
            fontSize: 32,
            color: colorScheme == "dark"? "#EEF6F6": "#091111"
          },
          notificationContainer: {
            backgroundColor: colorScheme === 'dark' ? '#030707' : '#F8FCFC',
            paddingTop: 20,
            borderRadius: 10,
            marginBottom: 10,
            width:" 100%"
          },
          notificationCardStyle: {
            flexDirection: 'row',
            marginVertical : 10,
            marginRight: 0,
            width:"100%"
          }
    })

    return(
    <View style={style.NotificationScreen}>
        <Text style={style.titleBarStyle}>Notifications</Text>    
        <View style={style.notificationContainer}>
        <View style={[style.notificationCardStyle, {borderBottomColor: colorScheme == "dark"? "#199A93": "#42C2BE", borderBottomWidth: 2, width: "100%"}]}>
          <View style={{paddingHorizontal:"5%", flexDirection: 'row',}}>
            <Ionicons name="person-circle" size={64} color={colorScheme == "dark"? "#196764": "#98E6E4"} />
            <Text style={{fontWeight: '900', fontSize: 15, color: colorScheme === "dark"? "#EEF6F6": "#091111", textAlignVertical: 'center', marginLeft: 10, height: 64}}>Someone liked your comment <Text style={{color: colorScheme === "dark"? "#EEF6F6AA": "#09111188"}}>57m ago</Text></Text>
          </View>
          </View>
          <View style={[style.notificationCardStyle, {borderBottomColor: colorScheme == "dark"? "#199A93": "#42C2BE", borderBottomWidth: 2, width: "100%"}]}>
          <View style={{paddingHorizontal:"5%", flexDirection: 'row',}}>
            <Ionicons name="person-circle" size={64} color={colorScheme == "dark"? "#196764": "#98E6E4"} />
            <Text style={{fontWeight: '900', fontSize: 15, color: colorScheme === "dark"? "#EEF6F6": "#091111", textAlignVertical: 'center', marginLeft: 10, height: 64}}>Someone commented on your post{'\n'} <Text style={{color: colorScheme === "dark"? "#EEF6F6AA": "#09111188"}}>57m ago</Text></Text>
          </View>
          </View>
          
          <View style={[style.notificationCardStyle, {paddingHorizontal: "5%"}]}>
            <Ionicons name="person-circle" size={64} color={colorScheme == "dark"? "#196764": "#98E6E4"} />
            <Text style={{fontWeight: '900', fontSize: 15, color: colorScheme === "dark"? "#EEF6F6": "#091111", textAlignVertical: 'center', marginLeft: 10, height: 64}}>Someone followed you <Text style={{color: colorScheme === "dark"? "#EEF6F6AA": "#09111188"}}>32m ago</Text></Text>
          </View>
        </View>
    </View>
    )
}