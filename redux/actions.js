import { ADD_FLASHCARD, DELETE_FLASHCARD, UPDATE_FLASHCARD, SET_LANGUAGE } from "./types";
// Importa el arreglo de SpanishFlashcards desde el archivo data
import { SpanishFlashcards } from "../data/SpanishFlashcards";




export const addFlashcard = (flashcard) => {
    return {
        type: ADD_FLASHCARD,
        payload: flashcard,
    };
};

export const deleteFlashcard = (id) => {
    return {
        type: DELETE_FLASHCARD,
        payload: id,
    };
};

export const updateFlashcard = (flashcard) => {
    return {
        type: UPDATE_FLASHCARD,
        payload: flashcard,
    };
};

// Crea una acción para inicializar el estado con las tarjetas en español
export const initializeFlashcards = () => {
    return {
        type: ADD_FLASHCARD,
        payload: SpanishFlashcards,
    };
}

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: language,
    };
}


