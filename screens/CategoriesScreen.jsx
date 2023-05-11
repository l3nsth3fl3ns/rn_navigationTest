import {CATEGORIES} from "../data/dummy_data";
import {FlatList, View, Text} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

const CategoriesScreen = () => {
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