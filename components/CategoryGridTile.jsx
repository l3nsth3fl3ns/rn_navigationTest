import {Platform, Pressable, StyleSheet, Text, View} from "react-native";

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                       android_ripple={{color: "#ccc"}}>
                <View style={styles.innerContainer}>
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
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: "white",
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