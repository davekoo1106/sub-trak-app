import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from
'@expo-google-fonts/montserrat';

import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SubListScreen from './screens/SubListScreen';
import SubDetailScreen from './screens/SubDetailScreen';
import SubHistoryScreen from './screens/SubHistoryScreen';
import SubAddScreen from './screens/SubAddScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddCardScreen from './screens/AddCardScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AddStack = createNativeStackNavigator();

function AddStackScreen() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen 
        name="Add Card"
        component={SubAddScreen}
        options={{
          headerShown: false
        }}
      />
      <AddStack.Screen 
        name="Card"
        component={AddCardScreen}
        options={{
          headerShown: true
        }}
      />
    </AddStack.Navigator>
  )
}

// This is essentially creating a stack that will allow a user to jump from the detail page to the history screen upon click 
// We tell the system that we want the history screen in a stack associated with the detail screen 
const HistoryStack = createNativeStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen 
          name="Detail"
          component={SubDetailScreen}
          options={{headerShown: false}}
        />
        <HistoryStack.Screen  
          name="History"
          component={SubHistoryScreen}
          options={{ headerShown: false }}
        />
    </HistoryStack.Navigator>
    
  );
}


// This is what builds the bottom tab navigation that will allow a user to navigate between screen easily using the tabs
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#4146ff"
        }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SubListScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-sharp" color={color} size={size}
            />
            ),
          }}
        />
        <Tab.Screen
          name="Add New Card"
          component={AddStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Add Card or Service',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-sharp" color={color} size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={HistoryStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Stats',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-sharp" color={color} size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-sharp" color={color} size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

