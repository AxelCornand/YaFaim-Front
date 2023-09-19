export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const FETCH_RECIPES_FILTERED = 'FETCH_RECIPES_FILTERED';
export const SAVE_RECIPES_FILTERED = 'SAVE_RECIPES_FILTERED';

export const CHANGE_INPUT_SEARCH_NAME = 'CHANGE_INPUT_SEARCH_NAME';
export const CHANGE_CATEGORY_SELECTOR = 'CHANGE_CATEGORY_SELECTOR';
export const CHANGE_DIET_SELECTOR = 'CHANGE_DIET_SELECTOR';

export const SET_INPUT_FIELDS = 'SET_INPUT_FIELDS';
export const SET_RECIPES_FILTERED = 'SET_RECIPES_FILTERED';

export const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE';
export const DELETE_FAVORITE_RECIPE = 'DELETE_FAVORITE_RECIPE';
export const SAVE_FAVORITE_RECIPES_ID = 'SAVE_FAVORITE_RECIPES_ID';
export const RESET_STATE_RECIPE = 'RESET_STATE_RECIPE';
export const RESET_FILTERS = 'RESET_FILTERS';

// here, we create the actions to dispatch

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes: recipes,
});

export const fetchRecipesFiltered = () => ({
  type: FETCH_RECIPES_FILTERED,
});

export const saveRecipesFiltered = (recipes) => ({
  type: SAVE_RECIPES_FILTERED,
  recipes: recipes,
});

export const setInputFields = (newInputField) => ({
  type: SET_INPUT_FIELDS,
  newValue: newInputField,
});

export const setRecipesFiltered = (bool) => ({
  type: SET_RECIPES_FILTERED,
  newValue: bool,
});

export const changeInputSearchName = (newInputValue) => ({
  type: CHANGE_INPUT_SEARCH_NAME,
  newValue: newInputValue,
});

export const changeCategorySelector = (newInputValue) => ({
  type: CHANGE_CATEGORY_SELECTOR,
  newValue: newInputValue,
});

export const changeDietSelector = (newInputValue) => ({
  type: CHANGE_DIET_SELECTOR,
  newValue: newInputValue,
});

export const saveFavoriteRecipesId = (recipesId) => ({
  type: SAVE_FAVORITE_RECIPES_ID,
  newValue: recipesId,
});

export const addFavoriteRecipe = (recipeId) => ({
  type: ADD_FAVORITE_RECIPE,
  newValue: recipeId,
});

export const deleteFavoriteRecipe = (recipeId) => ({
  type: DELETE_FAVORITE_RECIPE,
  newValue: recipeId,
});
export const resetStateRecipe = () => ({
  type: RESET_STATE_RECIPE,

});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});
