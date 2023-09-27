import React, { useState } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';

// Aquí importas el método useDispatch y la acción creadora addFlashcard
import { useDispatch } from 'react-redux';
import { addFlashcard } from '../../redux/actions';
import styles from './AddFlashcarScreen.style';

const AddFlashcardScreen = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  // Aquí creas la variable dispatch que invoca el método useDispatch
  const dispatch = useDispatch();

  const handleAddFlashcard = () => {
    // Aquí creas un objeto con la información de la nueva tarjeta
    const newFlashcard = {
      id: Math.random().toString(), // Puedes usar otro método para generar un id único
      spanish: word,
      english: definition,
      language: "spanish", // Puedes usar otro método para obtener el idioma seleccionado
    };

    // Aquí usas el método dispatch con la acción creadora addFlashcard y le pasas el objeto
    dispatch(addFlashcard(newFlashcard));

    // Aquí usas el método navigation.navigate para volver a la pantalla anterior
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Flashcard</Text>
      <TextInput
        style={styles.input}
        placeholder="Palabra"
        value={word}
        onChangeText={(text) => setWord(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Definición"
        value={definition}
        onChangeText={(text) => setDefinition(text)}
      />
      <Button title="Agregar" onPress={handleAddFlashcard} />
    </View>
  );
};

export default AddFlashcardScreen;

