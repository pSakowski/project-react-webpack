import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { strContains } from '../utils/strContains';
import initialState from './initialState';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const searchStringValue = (state) => state.searchString;
export const getFavoriteCard = (state) => state.cards.filter(card => card.isFavorite === true);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload })
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });


//************** CHANGE REDUCER */
// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};

//     case 'ADD_CARD':
//       return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }]};

//     case 'UPDATE_SEARCHSTRING':
//       return { ...state, searchString: action.payload }

//     case 'ADD_LIST':
//       return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload}]};

//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

//     default:
//       return state
//   }
// };

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };

//   return newState;
// };

//*********** SPLIT TO SUBREDUCER IN redux/ */
// const listsReducer = (statePart = [], action) => {
//   switch(action.type) {
//     case 'ADD_LIST':
//       return [...statePart, { ...action.payload, id: shortid() }];
//     default:
//       return statePart;
//   }
// }

// const columnsReducer = (statePart = [], action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return [...statePart, { ...action.payload, id: shortid() }];
//     default:
//       return statePart;
//   }
// }

// const cardsReducer = (statePart = [], action) => {
//   switch(action.type) {
//     case 'ADD_CARD':
//       return [...statePart, { ...action.payload, id: shortid() }];
//     case 'TOGGLE_CARD_FAVORITE':
//       return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
//     default:
//       return statePart;
//   }
// }

// const searchStringReducer = (statePart = '', action) => {
//   switch(action.type) {
//     case 'UPDATE_SEARCHSTRING':
//       return action.payload
//     default:
//       return statePart;
//   }
// }

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;