import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";


const MealsList = (props) => {

    const {items} = props
    const renderMealItem = (itemData) => {

        return <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
        />
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})