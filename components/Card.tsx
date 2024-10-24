import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, useColorScheme, Image } from "react-native";

interface Props {
    children: string;
    image: false | string;
}

export default function Card(props: Props) {
    const colorScheme = useColorScheme();
    const style = StyleSheet.create({
        card: {
            width: '100%',
            maxHeight: 250,
            minHeight: 100,
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: colorScheme == "dark"? "#3DBDB8": "#42C2BE",
            textAlignVertical: 'center',
            padding: 10,
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
            <View style={{flexDirection: 'column', width:"90%", alignItems: 'flex-start', marginBottom: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10}}>
            <Ionicons name="person-circle" size={48} color={colorScheme == "dark"? "#196764": "#98E6E4"} />
            <Text style={{fontWeight: '900', fontSize: 16, color: "#EEF6F6", marginLeft: 10}}>Hanan <Text style={{fontWeight: '900', fontSize: 16, color: "#EEF6F6AA"}}>@hanan</Text>{'\n'}<Text style= {{color: "#EEF6F6AA"}}>posted on 12/02/2022</Text></Text>
            </View>
            {props.image && <Image src={props.image} style={style.image}/>}
            <Text style={style.text}>{props.children}</Text>
            <Text>test</Text>
            </View>
        </View>
    )   
}