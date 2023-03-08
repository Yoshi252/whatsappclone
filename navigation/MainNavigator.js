import React from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import ChatListScreen from '../screens/ChatListScreen';
import SettingsScreen from '../screens/ChatSettingsScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import ChatScreen from "../screens/ChatScreen";

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: ''
      }}
    >
      <Tab.Screen 
        name="ChatList" 
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size}) => {
            return (
            <Ionicons 
              name="chatbubble-outline" 
              size={size} 
              color={color}/>
            )
          }
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size}) => {
            return (
            <Ionicons 
              name="settings-outline" 
              size={size} 
              color={color}/>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigator = props => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={TabNavigator} 
            options={{
            headerShown: false
            }}
        />
        <Stack.Screen 
            name="ChatScreen" 
            component={ChatScreen} 
            options={{
            headerTitle: "",
            headerBackTitle: "Back"
            }}
        />
        <Stack.Screen 
            name="ChatSettings" 
            component={ChatSettingsScreen} 
            options={{
                headerBackTitle: "Back"
            }}
        /> 
    </Stack.Navigator>
)

export default MainNavigator