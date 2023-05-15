import {StyleSheet, View, Pressable, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const TestButton =({isVegan}) => {
    const navigation = useNavigation()
    const pressHandler = () => {
        navigation.navigate('MealDetails', {
            mealId: isVegan
            })
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={pressHandler}>
                <Text style={styles.text}>MEAL DETAILS</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
})

export default TestButton