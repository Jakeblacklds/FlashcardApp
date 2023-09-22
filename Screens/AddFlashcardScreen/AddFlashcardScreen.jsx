import React, { useState } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';

const AddFlashcardScreen = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleAddFlashcard = () => {
    // Aquí puedes agregar la lógica para agregar la flashcard al estado o al almacenamiento
    // Por simplicidad, aquí solo mostramos la información ingresada
    console.log('Palabra:', word);
    console.log('Definición:', definition);
    // Luego, puedes agregar la lógica para guardar la flashcard en tu almacenamiento
  };

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
