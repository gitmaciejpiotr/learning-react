import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ searchString, cards }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString.searchString));
export const getFavouriteCards = ({ cards }) => cards
    .filter(card => card.isFavourite === true);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVOURITE = createActionName('TOGGLE_CARD_FAVOURITE');
const DELETE_CARD = createActionName('DELETE_CARD');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavourite = payload => ({ type: TOGGLE_CARD_FAVOURITE, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVOURITE:
            return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavourite: !card.isFavourite } : card);
        case DELETE_CARD:
            return statePart.filter(card => card.id !== action.payload.id);
        default:
            return statePart;
    }
}

export default cardsReducer;