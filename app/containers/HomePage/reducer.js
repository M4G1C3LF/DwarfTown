import {
  CHANGE_USERNAME,
  LOAD_TOWN,
  LOAD_TOWN_SUCCESS,
  LOAD_TOWN_ERROR
} from './constants';

// The initial state of the App
const initialState = {
  username: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return { ...state, username: action.name.replace(/@/gi, '') };
    case LOAD_TOWN: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        town: [],
      };
      return newState;
    }
    case LOAD_TOWN_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        town: action.town.Brastlewark,
      };
      return newState;
    }
    case LOAD_TOWN_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:

      return state;
  }
}

export default homeReducer;
