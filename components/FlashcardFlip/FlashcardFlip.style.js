import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#007aff', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    backgroundColor: 'green',
  },
  cardText: {
    fontSize: 24,
    color: 'white', 
  },
});

export default styles;
