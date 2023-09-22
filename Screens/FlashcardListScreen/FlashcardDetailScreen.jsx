import React from 'react';
import { View } from 'react-native';
import FlashcardFlip from '../../components/FlashcardFlip/FlashcardFlip';
import styles from './FlashcardDetailScreen.style';

const FlashcardDetailScreen = ({ route }) => {
  const { flashcard } = route.params;

  return (
    <View style={styles.container}>
      <FlashcardFlip frontText={flashcard.spanish} backText={flashcard.english} />
    </View>
  );
};

export default FlashcardDetailScreen;


