import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";

const MealItem = ({title, imageUrl, duration, complexity, affordability, onPress}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                onPress={onPress}
            >
                <View>
                    <View>
                        <Image
                            style={styles.image}
                            source={{uri: imageUrl}}/>
                        <Text
                            style={styles.title}
                        >{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
    },
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
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
})

export default MealItem