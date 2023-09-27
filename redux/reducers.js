// Este es el archivo de reducers
import { ADD_FLASHCARD, DELETE_FLASHCARD, UPDATE_FLASHCARD, SET_LANGUAGE } from "./types";
import { combineReducers } from "redux";

// Aquí importas el array de productos desde el archivo SpanishFlashcards
import { SpanishFlashcards } from "../data/SpanishFlashcards";
// Este es el estado inicial que contiene el array de productos y el idioma seleccionado
const initialState = {
    flashcards: SpanishFlashcards,
    language: "spanish",
};

// El resto del código es igual que antes
const flashcardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FLASHCARD:
            return {
                ...state,
                flashcards: [...state.flashcards, action.payload],
            };
        case DELETE_FLASHCARD:
            return {
                ...state,
                flashcards: state.flashcards.filter(
                    (flashcard) => flashcard.id !== action.payload
                ),
            };
        case UPDATE_FLASHCARD:
            return {
                ...state,
                flashcards: state.flashcards.map((flashcard) =>
                    flashcard.id === action.payload.id ? action.payload : flashcard
                ),
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

// Agrega un filtro para devolver solo las tarjetas en español
const spanishFlashcardsReducer = (state = initialState, action) => {
    const newState = flashcardsReducer(state, action);
    return {
        ...newState,
        flashcards: newState.flashcards.filter(
            (flashcard) => flashcard.language === state.language
        ),
    };
};

export default combineReducers({
    flashcards: flashcardsReducer,
    spanishFlashcards: spanishFlashcardsReducer,
});
