import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {useEffect, useLayoutEffect} from 'react'

import {MEALS} from "../data/dummy_data";
import MealDetails from "../components/MealDetails";


const MealDetailsScreen = ({navigation, route}) => {
    const {mealId} = route.params


    // get the exact meal given the params from the MealsOverViewScreen/Mea
    let selectedMeal = MEALS.find((meal) => meal.id === mealId)


    // for the title of the page
    useLayoutEffect(() => {
        const MealTitle = selectedMeal.title

        navigation.setOptions({
            title: MealTitle
        })
    }, [mealId, navigation])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: selectedMeal.imageUrl}}
                        style={styles.image}/>
                </View>
                <View style={styles.contentContainer}>
                    <MealDetails
                        complexity={selectedMeal.complexity}
                        affordability={selectedMeal.affordability}
                        duration={selectedMeal.duration}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Ingredients</Text>
                    <View style={styles.ingredientContainer}>
                        {selectedMeal.ingredients.map((ingredient) =>
                            <Text
                                key={ingredient}
                                style={styles.ingredient}
                            >
                                {ingredient}
                            </Text>
                        )}
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Steps</Text>
                    <Text style={styles.text}>{selectedMeal.steps}</Text>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        marginHorizontal: 10,
        marginBottom: 17,
        lineHeight: 24,
    },
    heading: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24,
        marginVertical: 17
    },
    container: {
        flex: 1,
        padding: 17,
    },
    image: {
        height: 100,
        width: "100%",
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 8.5,
        borderRadius: 8,
        marginTop: 8.5,
    },
    imageContainer: {
        borderRadius: 8,

        overflow: 'hidden',
        backgroundColor: "white"
    },
    ingredient: {
        width: '50%',
        height: 20,

    },
    ingredientContainer: {
        flexWrap: 'wrap',
    }

})
export default MealDetailsScreen