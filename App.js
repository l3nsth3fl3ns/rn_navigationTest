import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// declared to pass into Stack.Screen to nest drawer navigator inside of it. As it is both navigator headers are shown.
// to remove the stack header
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#303030'},
                headerTintColor: '#CC9933',
                drawerActiveTintColor: '#CC9933',
                drawerContentStyle: {backgroundColor: '#F4F4F4'},
                sceneContainerStyle: {backgroundColor: '#24180f'} // == contentStyle in Stack Navigation
            }}>
            <Drawer.Screen
                name='Categoriess'
                component={CategoriesScreen}
                options={{
                    title: 'All Categories'
                }}
            />
            <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
        </Drawer.Navigator>
    )
}

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
                        name='DrawerNavigatorLoader'
                        component={DrawerNavigator}
                        // route and navigation are passed down to screen by React Navigation automatically
                        // options function executes as soon as screen gets active
                        options={{
                            // title: 'All Categories'
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                        // done in MealsOverScreen with UseLayoutEffect
                        /*options={({route, navigation}) => {
                            const {categoryId} = route.params
                            return {
                                title: categoryId
                            }
                        }}*/
                    />
                    <Stack.Screen
                        name='MealDetails'
                        component={MealDetailsScreen}
                        // setting a header for the screen, either through functions or component
                        // for interaction with the component better set options in the screen
                        /*options={{headerRight: () => {
                            return(
                                <Text>In the header</Text>
                            )
                            }}}*/
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

