import {FlatList, StyleSheet, View} from "react-native";
import MealItemWithNavigation from "../MealItemWithNavigation";

const MealsList = ({items}) => {
    const renderMealItem = (itemData) => {
        const item = itemData.item

        const mealItemProps = {
            id: item.id, //for navigation in MealItemWithNavigation
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,

        }
        return <MealItemWithNavigation {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={items}
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

export default MealsList