
import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({route, navigation}) => {

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const headerButtonPressedHandler = () => {
        console.log('Pressed!')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressedHandler}/>
            }
        })
    }, [navigation, headerButtonPressedHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

           <View style={styles.listOuterContainer}>
               <View style={styles.listContainer}>
                   <SubTitle>Ingredients</SubTitle>
                   <List data={selectedMeal.ingredients}/>

                   <SubTitle>Steps</SubTitle>
                   <List data={selectedMeal.steps}/>
               </View>
           </View>

        </ScrollView>
    )
}

export default MealDetailScreen;


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})