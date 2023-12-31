import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'

const IconButton = (props) => {

    const {icon, color, onPress} = props
    return <Pressable onPress={onPress} style={({pressed}) => pressed ? style.pressed : null}>
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
}

export default IconButton;

const style = StyleSheet.create({
    pressed: {
        opacity: .7
    }
})