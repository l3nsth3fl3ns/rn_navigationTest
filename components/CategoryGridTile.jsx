import {Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native"; // hook to get the navigation object in every component if
//props are not wanted

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={props.onPress}>
                <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </Pressable>
        </View>)
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        height: 150,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
})


export default CategoryGridTile