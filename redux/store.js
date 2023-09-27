import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

// Crea un objeto con las opciones que quieras para tu store
const options = {
  reducer: reducers, 
  preloadedState: {},
  middleware: [], 
  devTools: true, 
};

const store = configureStore(options);


export default store;
