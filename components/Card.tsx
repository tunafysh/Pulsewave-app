import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, View, StyleSheet, useColorScheme, Image, Pressable } from "react-native";
import {Motion} from "@legendapp/motion"

interface Props {
    children: string;
    image: false | string;
}

export default function Card(props: Props) {
    const colorScheme = useColorScheme();
    const [actions, setActions] = useState<cardActions>({
        liked: false,
        disliked: false,
        saved: false
    })
    const style = StyleSheet.create({
        card: {
            width: '100%',
            maxHeight: 250,
            minHeight: 100,
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: colorScheme == "dark"? "#3DBDB8": "#42C2BE",
            textAlignVertical: 'center',
            paddingTop: 10,
            paddingHorizontal: 10,
            marginBottom: 15
        },
        image: {
            width: '100%',
            height: '50%',
        },
        text: {
            fontWeight: '800',
            fontSize: 18,
            textAlignVertical: 'center',
            color: "#EEF6F6",
        }
    })
    return (
        <View style={style.card}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10, alignSelf:'flex-start'}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10}}>
            <Ionicons name="person-circle" size={48} color={colorScheme == "dark"? "#196764": "#98E6E4"} />
            <Text style={{fontWeight: '900', fontSize: 16, color: "#EEF6F6", marginLeft: 10}}>Hanan <Text style={{fontWeight: '900', fontSize: 16, color: "#EEF6F6AA"}}>@hanan</Text>{'\n'}<Text style= {{color: "#EEF6F6AA"}}>posted on 25/10/2024</Text></Text>
            </View>
            {props.image && <Image src={props.image} style={style.image}/>}
            <Text style={style.text}>{props.children}</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: "#199A93", height:'25%', borderRadius: 14, padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style= {{flexDirection: 'row'}}>
                <Motion.Pressable onPress={() => setActions({liked: !actions.liked, disliked: false, saved: actions.saved})}>

            <Ionicons name={'caret-up'} size={32} color={actions.liked? "#81eb82": "#196764"} />
</Motion.Pressable>
<Motion.Pressable onPress={() => setActions({liked: false, disliked: !actions.disliked, saved: actions.saved})}>


            <Ionicons name={'caret-down'} size={32} color={actions.disliked? '#f27676': "#196764"} />
</Motion.Pressable>
                </View>
                <Motion.Pressable onPress={() => setActions({liked: actions.liked, disliked: actions.disliked, saved: !actions.saved})}>
            <Ionicons name={actions.saved? 'bookmark': 'bookmark-outline'} size={32} color={"#196764"} />
                </Motion.Pressable>
            </View>
        </View>
    )   
}