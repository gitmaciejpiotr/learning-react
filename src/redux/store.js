import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ searchString, cards }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCH_PHRASE', payload });

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }] };
        case 'UPDATE_SEARCH_PHRASE':
            return { ...state, searchString: action.payload.searchString };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;