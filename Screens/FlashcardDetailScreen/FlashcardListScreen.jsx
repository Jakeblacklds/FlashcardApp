import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import styles from "./FlashcardListScreen.style";

// Importa los iconos que quieras usar
import { Entypo, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const FlashcardListScreen = () => {
  const navigation = useNavigation();

  // Obtén el arreglo de tarjetas en español del estado de Redux
  const flashcards = useSelector((state) => state.spanishFlashcards.flashcards);

  // Obtén el idioma seleccionado del estado de Redux
  const language = useSelector((state) => state.flashcards.language);

  // Agregar lógica para el botón "Agregar" en esta pantalla
  const handleAddFlashcard = () => {
    navigation.navigate('AddFlashcard');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddFlashcard}
      >
        <Text style={styles.addButtonText}>Agregar Palabra</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Lista de Flashcards </Text>
      {/* Agregar la prop numColumns con valor 2 */}
      <FlatList
        data={flashcards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.flashcardItem}
            onPress={() =>
              navigation.navigate("FlashcardDetail", { flashcard: item })
            }
          >
            {/* El texto de la tarjeta depende del idioma seleccionado */}
            <Text style={styles.flashcardText}>{language === "spanish" ? item.spanish : item.english}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default FlashcardListScreen;
