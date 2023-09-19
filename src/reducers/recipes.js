/* eslint-disable max-len */
// here, we import the actions

import {
  SAVE_RECIPES,
  SET_INPUT_FIELDS,
  CHANGE_INPUT_SEARCH_NAME,
  CHANGE_CATEGORY_SELECTOR,
  CHANGE_DIET_SELECTOR,
  SAVE_RECIPES_FILTERED,
  SET_RECIPES_FILTERED,
  ADD_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE,
  SAVE_FAVORITE_RECIPES_ID,
  RESET_STATE_RECIPE,
  RESET_FILTERS,
} from '../actions/recipes';

// here, we define our initial state

export const initialState = {
  list: [],
  searchName: '',
  inputFields: [{ id: 1, ingredients: '' }],
  recipesFiltered: [],
  favoriteRecipesId: [],
  isFiltered: false,
  categorySelector: 'Toutes les catégories',
  dietSelector: 'Tous les régimes alimentaires',
};

// In this reducer, we complete the data of the actions created in the actions.recipes file

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };

    case SAVE_RECIPES_FILTERED:
      return {
        ...state,
        recipesFiltered: action.recipes,
        isFiltered: true,
      };

    case SAVE_FAVORITE_RECIPES_ID:
    {
      const favoriteArrayId = [...state.favoriteRecipesId, action.newValue];
      const favoriteArrayIdUnique = favoriteArrayId.flat();

      return {
        ...state,
        favoriteRecipesId: favoriteArrayIdUnique,
      };
    }

    case ADD_FAVORITE_RECIPE: {
      const isAlreadyInFavorites = [state.favoriteRecipesId].includes(action.newValue);

      if (!isAlreadyInFavorites) {
        const newFavoriteArrayId = [...state.favoriteRecipesId, action.newValue];
        const newFavoriteArrayUniqueId = [...new Set(newFavoriteArrayId)].sort((a, b) => a - b);

        return {
          ...state,
          favoriteRecipesId: newFavoriteArrayUniqueId,
        };
      }

      return state;
    }

    case DELETE_FAVORITE_RECIPE:
    {
      return {
        ...state,
        favoriteRecipesId: state.favoriteRecipesId.filter((id) => id !== action.newValue),
      };
    }

    case SET_INPUT_FIELDS:
      return {
        ...state,
        inputFields: action.newValue,
      };

    case SET_RECIPES_FILTERED:
      return {
        ...state,
        isFiltered: action.newValue,
      };

    case CHANGE_INPUT_SEARCH_NAME:
      return {
        ...state,
        searchName: action.newValue,
      };

    case CHANGE_CATEGORY_SELECTOR:
      return {
        ...state,
        categorySelector: action.newValue,
      };

    case CHANGE_DIET_SELECTOR:
      return {
        ...state,
        dietSelector: action.newValue,
      };
    case RESET_STATE_RECIPE:
      return {
        ...state,
        favoriteRecipesId: '',
      };
    case RESET_FILTERS:
      return {
        ...state,
        searchName: '',
        categorySelector: 'Toutes les catégories',
        dietSelector: 'Tous les régimes alimentaires',
      };

    default:
      return state;
  }
};
export default reducer;
