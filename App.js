import React from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { TextInput,List,Card} from "react-native-paper";
import SearchScreen from './Components/SearchScreen';
import HomeScreen from './Components/HomeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current City" component={HomeScreen} />
      <Tab.Screen name="Select City" component={SearchScreen} />
    </Tab.Navigator>
  );
}

  
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Current City') {
              iconName = focused ? "md-cloud" : "md-cloud-outline";
            } else if (route.name === 'Select City') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor:'#6200ee',
         inactiveBackgroundColor:'#6200ee'
          
        }}
      >
        <Tab.Screen name="Current City" component={HomeScreen} />
        <Tab.Screen name="Select City" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}