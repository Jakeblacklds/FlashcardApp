import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToFlashcardList = () => {
    navigation.navigate('FlashcardList');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToFlashcardList}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SpanishFlashcards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
