// actions
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCH_PHRASE = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({ type: UPDATE_SEARCH_PHRASE, payload });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCH_PHRASE:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;