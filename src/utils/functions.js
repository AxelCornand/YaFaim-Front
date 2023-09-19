/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import jwt_decode from 'jwt-decode';

/**
 * Function that tests the validity of the token
 * true if token valid otherwise false
 * @returns bool
 */
export function isTokenOk() {
  const currentUser = JSON.parse(sessionStorage.getItem('user'));

  if (currentUser) {
    const decodedToken = jwt_decode(currentUser.accessToken);
    const dateNow = new Date();
    console.log(new Date(decodedToken.exp * 1000));
    console.log(dateNow);
    console.log('-');

    if (new Date(decodedToken.exp * 1000) > dateNow) {
      return true;
    }
    sessionStorage.removeItem('user');
    return false;
  }

  return false;
}

/**
 * Function for add a recipe in sessionstorage
 * @param {number} idToAdd
 * @returns
 */
export function addFavoriteRecipeSession(idToAdd) {
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const favoritesRecipes = currentUser.recipes;

  const isAlreadyInFavorites = favoritesRecipes.find((recipe) => recipe.id === idToAdd);

  if (!isAlreadyInFavorites) {
    favoritesRecipes.push({ id: idToAdd });
    const newFavoriteArrayUniqueId = [...new Set(favoritesRecipes)].sort((a, b) => a - b);

    currentUser.recipes = newFavoriteArrayUniqueId;
    sessionStorage.setItem('user', JSON.stringify(currentUser));

    return newFavoriteArrayUniqueId;
  }

  return favoritesRecipes;
}
/**
 * Function for delete a recipe in sessionstorage
 * @param {number} idToDelete
 * @returns
 */
export function deleteFavoriteRecipeSession(idToDelete) {
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const newFavoritesRecipes = currentUser.recipes.filter((recipe) => recipe.id !== idToDelete);

  currentUser.recipes = newFavoritesRecipes;
  sessionStorage.setItem('user', JSON.stringify(currentUser));

  return newFavoritesRecipes;
}
