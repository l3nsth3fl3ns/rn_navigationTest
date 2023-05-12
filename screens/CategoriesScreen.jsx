import {CATEGORIES} from "../data/dummy_data";
import {FlatList, View, StyleSheet, Platform} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoriesScreen = (props) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            props.navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            }) // object allows to define params which are passed to MealsOverViewScreen via route.params
        }

        return (
            <CategoryGridTile title={itemData.item.title}
                              color={itemData.item.color}
                              onPress={pressHandler}
            />
        )
    }
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen