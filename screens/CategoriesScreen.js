import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";


const CategoriesScreen = ({navigation}) => {


    const renderCategoryItem = (itemData) => {

        const PressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={PressHandler}
        />
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}


export default CategoriesScreen;