import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {backgroundColor: '#517891'},
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: '#24180f'}
                    }}
                >
                    <Stack.Screen
                        name='MealsCategories'
                        component={CategoriesScreen}
                        // route and navigation are passed down to screen by React Navigation automatically
                        // options function executes as soon as screen gets active
                        options={{
                            title: 'All Categories'
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                        /*options={({route, navigation}) => {
                            const {categoryId} = route.params
                            return {
                                title: categoryId
                            }
                        }}*/
                    />
                    <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

