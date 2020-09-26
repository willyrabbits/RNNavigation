import 'react-native-gesture-handler'
import React from 'react'
import { Text, View } from 'react-native'

//REACT NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from './views/Inicio'
import Nosotros from './views/Nosotros'
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio'

const Stack = createStackNavigator()

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Inicio"
                    screenOptions={{
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: 'left'
                    }}
                >
                    <Stack.Screen
                        name='Inicio'
                        component={Inicio}
                        options={{
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: '#F5622F'
                            },
                            title: "main comp"
                        }}
                    />
                    <Stack.Screen
                        name='Nosotros'
                        component={Nosotros}
                        options={({ route }) => ({
                            title: route.params.clienteId
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App