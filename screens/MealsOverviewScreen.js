import {View, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useEffect} from "react";

const MealsOverviewScreen = ({route, navigation}) => {

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)

        navigation.setOptions({
            title: categoryTitle.title
        })
    }, [])
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
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})