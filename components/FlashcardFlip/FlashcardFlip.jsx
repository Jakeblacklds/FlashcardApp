import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './FlashcardFlip.style';

const FlashcardFlip = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipAnimation = useRef(new Animated.Value(0)).current;

  const startFlip = () => {
    setIsFlipped(!isFlipped);

    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateY = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateYBack = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  return (
    <TouchableOpacity onPress={startFlip}>
      <View style={styles.cardContainer}>
        <Animated.View
          style={[
            styles.card,
            { transform: [{ rotateY }] },
          ]}
        >
          <Text style={styles.cardText}>{isFlipped ? backText : frontText}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.card,
            { transform: [{ rotateY: rotateYBack }] },
            styles.cardBack,
          ]}
        >
          <Text style={styles.cardText}>{backText}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default FlashcardFlip;
