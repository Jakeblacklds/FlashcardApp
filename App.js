import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import FlashcardListScreen from "./Screens/FlashcardDetailScreen/FlashcardListScreen"
import AddFlashcardScreen from "./Screens/AddFlashcardScreen/AddFlashcardScreen"
import FlashcardDetailScreen from "./Screens/FlashcardListScreen/FlashcardDetailScreen"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlashcardList" component={FlashcardListScreen} />
        <Stack.Screen name="FlashcardDetail" component={FlashcardDetailScreen} />
        <Stack.Screen name="AddFlashcard" component={AddFlashcardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;