import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/home'
import {Dashboard} from '../screens/dashboard'
import {Profile} from '../screens/profile'
import {Feather} from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <NavigationContainer>
            <Navigator>
                
                <Screen name='Home' component={Home} options={{
                    tabBarIcon: () => {
                        return <Feather name='home' size={23} color='#007bff'/>
                    }
                }} />

                <Screen name='Dashboard' component={Dashboard} options={{
                    tabBarIcon: () => {
                        return <Feather name='airplay' size={23} color='#007bff'/>
                    }
                }} />

                <Screen name='Perfil' component={Profile} options={{
                    tabBarIcon: () => {
                        return <Feather name='user' size={23} color='#007bff'/>
                    }
                }} />

            </Navigator>
        </NavigationContainer>
    )
}