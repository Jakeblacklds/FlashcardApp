import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SpanishFlashcards from '../../data/SpanishFlashcards';
// Importa los estilos desde el archivo local o define los estilos directamente aquí
import styles from './FlashcardListScreen.style';

const FlashcardListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Flashcards en Español</Text>
      <FlatList
        data={SpanishFlashcards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.flashcardItem}
            onPress={() => navigation.navigate('FlashcardDetail', { flashcard: item })}
          >
            <Text style={styles.flashcardText}>{item.spanish}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlashcardListScreen;

