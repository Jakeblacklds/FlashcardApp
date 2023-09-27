import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./redux/store";

import FlashcardListScreen from "./Screens/FlashcardDetailScreen/FlashcardListScreen";
import AddFlashcardScreen from "./Screens/AddFlashcardScreen/AddFlashcardScreen";
import FlashcardDetailScreen from "./Screens/FlashcardListScreen/FlashcardDetailScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import ExerciseScreen from "./Screens/ExerciseScreen/ExerciseScreen";
import AccountScreen from "./Screens/AccountScreen/AccountScreen";

import { Entypo, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={FlashcardListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="FlashcardDetail" component={FlashcardDetailScreen} />
    <Stack.Screen name="AddFlashcard" component={AddFlashcardScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarStyle={{
            backgroundColor: "#0000ff",
            height: 60,
            borderRadius: 15,
          }}
          tabBarItemStyle={{
            backgroundColor: "#00ff00",
            margin: 10,
            borderRadius: 10,
          }}
        >
          {/* Agrega la opción tabBarIcon para cada pantalla */}
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name="chatbubble" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Exercises"
            component={ExerciseScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons name="brain" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FontAwesome name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;