import {Text, View, StyleSheet} from "react-native";

const MealDetails = ({duration, complexity, affordability}) => {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})

export default MealDetails