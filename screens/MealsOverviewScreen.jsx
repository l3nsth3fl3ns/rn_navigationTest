import {useLayoutEffect} from 'react'
import {View, StyleSheet, FlatList} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy_data";
/*import MealItem from "../components/MealsList/MealItem";*/
/*import MealItemWithNavigation from "../components/MealItemWithNavigation";*/
import MealsList from "../components/MealsList/MealsList";
/*import TestButton from "../components/TestButton";*/

const MealsOverviewScreen = ({navigation, route}) => {
    const catID = route.params.categoryId
    // can also be achieved via assigning useRoute to const and accessing .params

    const displayMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })

    // for the title of the page i.e. Hamburgers
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catID).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catID, navigation])

    /* let testItem ; for test purposes only

     // this code needs to be activated when navigation to MealDetails should happen in this component and not
     in the MealItem Component.
      testItem = itemData.item.steps for test purposes only
         // pass on as prop to MealItem
         const pressHandler = () => {
         navigation.navigate('MealDetails', {
             mealId: item.id,
             TODO Create component linking to the same screen but with different route.params. See what happens? Done
             The app throws an error. Data is not globally put into single object when different pressHandlers link
              to the same screen. Tested with TestButton.jsx
         })*/

    return <MealsList items={displayMeals}/>

}


export default MealsOverviewScreen