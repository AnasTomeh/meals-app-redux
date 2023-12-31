import {Text, View, StyleSheet} from "react-native";
import SubTitle from "../components/MealDetail/SubTitle";


const FavoritesScreen = () => {

    return (
        <View style={styles.rootContainer}>
            <SubTitle>Favorites Meals</SubTitle>
            <Text style={styles.text}>No Favorite Meals Found :(</Text>
        </View>
    )
}


export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        margin: 12,
        color:'white'
    }

})