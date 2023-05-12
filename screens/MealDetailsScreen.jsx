import {View, Text, StyleSheet} from "react-native";

import {MEALS} from "../data/dummy_data";
import {useLayoutEffect} from "react";

const MealDetailsScreen = ({navigation, route}) => {
    const {mealId, description} = route.params

    // get the exact meal given the params from the MealsOverViewScreen/Mea
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // for the title of the page
    useLayoutEffect(() => {
        const MealTitle = selectedMeal.title

        navigation.setOptions({
            title: MealTitle
        })
    }, [mealId, navigation])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{selectedMeal.steps}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container: {
        flex: 1,
        padding: 10,
    }
})
export default MealDetailsScreen