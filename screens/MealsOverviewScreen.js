import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return (
        <MealsList items={displayMeals}/>
    )
}

export default MealsOverviewScreen;

