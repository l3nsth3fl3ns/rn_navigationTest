import {useLayoutEffect} from 'react'
import {View, StyleSheet, FlatList} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy_data";
import MealItem from "../components/MealItem";
import MealItemWithNavigation from "../components/MealItemWithNavigation";

const MealsOverviewScreen = ({navigation, route}) => {
    const catID = route.params.categoryId
    // can also be achieved via assigning useRoute to const and accessing .params

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })

    // for the title of the page i.e. Hamburgers
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catID).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catID, navigation])




    const renderMealItem = (itemData) => {

        const item = itemData.item
        // pass on as prop to MealItem
        const pressHandler = () => {
        navigation.navigate('MealDetails', {
            mealId: item.id,
            description: item.steps
            // TODO Create component linking to the same screen but with different route.params. See what happens?
        })
    }
        const mealItemProps = {
            id: item.id, //for navigation in MealItemWithNavigation
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: pressHandler
        }
        return <MealItemWithNavigation {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals}
                      keyExtractor={(item) => item.id}
                      renderItem={renderMealItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
    }
})
export default MealsOverviewScreen