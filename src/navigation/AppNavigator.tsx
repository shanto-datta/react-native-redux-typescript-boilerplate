import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackPramsList } from './navigation.types';
import HomeView from '../screens/HomeView';
import SettingsView from '../screens/SettingsView';

const Stack = createStackNavigator<RootStackPramsList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeView">
            <Stack.Screen name="HomeView" component={HomeView} />
            <Stack.Screen name="SettingsView" component={SettingsView} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator