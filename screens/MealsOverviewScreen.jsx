import {useLayoutEffect} from 'react'
import {View, StyleSheet, FlatList} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy_data";
import MealItem from "../components/MealItem";
import MealItemWithNavigation from "../components/MealItemWithNavigation";
import TestButton from "../components/TestButton";

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

    // let testItem ; for test purposes only


    const renderMealItem = (itemData) => {

        const item = itemData.item
        // testItem = itemData.item.steps for test purposes only
        // pass on as prop to MealItem
        const pressHandler = () => {
        navigation.navigate('MealDetails', {
            mealId: item.id,
            // TODO Create component linking to the same screen but with different route.params. See what happens?
            // The app throws an error. Data is not globally put into single object when different pressHandlers link
            // to the same screen. Tested with TestButton.jsx
        })
    }
        const mealItemProps = {
            id: item.id, //for navigation in MealItemWithNavigation
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: pressHandler,
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals}
                      keyExtractor={(item) => item.id}
                      renderItem={renderMealItem}
            />
            {/*<TestButton isVegan={testItem}/>*/}
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