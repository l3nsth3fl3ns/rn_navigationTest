import {StyleSheet, Text, View} from "react-native";
import {FavoritesContext} from "../store/context/favorites-context";
import {useContext} from "react";
import {MEALS} from "../data/dummy_data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
    const FavoriteMealsCtx = useContext(FavoritesContext)



    const favoriteMeals = MEALS.filter(mealItem => FavoriteMealsCtx.ids.includes(mealItem.id))

    if (favoriteMeals.length === 0) {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals.</Text>
            </View>
        )
    }

    return(
       <MealsList items={favoriteMeals}/>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default FavoritesScreen