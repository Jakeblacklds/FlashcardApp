import { StyleSheet, Dimensions } from 'react-native';

// Define una variable para el tamaño de los elementos
const itemSize = Dimensions.get("window").width / 2.6;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      
      marginHorizontal: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 16,
    },
    flashcardItem: {
      backgroundColor: 'lightblue',
      padding: 12,
      justifyContent: 'center',
      margin: 5,
      borderRadius: 8,
      
      width: itemSize,
      height: itemSize,
    },
    flashcardText: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    addButton: {
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5,
    },
    addButtonText: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
    },
  })

export default styles;
