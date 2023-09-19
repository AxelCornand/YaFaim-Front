/* eslint-disable max-len */
/* eslint-disable indent */
import axios from 'axios';

import {
  FETCH_RECIPES,
  saveRecipes,
  FETCH_RECIPES_FILTERED,
  saveRecipesFiltered,
  ADD_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE,
} from '../actions/recipes';
import { addFavoriteRecipeSession, deleteFavoriteRecipeSession } from '../utils/functions';
import { setMessageDescription } from '../actions/messages';

const API_URL = 'http://localhost:8081/api/';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get(`${API_URL}recipeList`)
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          store.dispatch(setMessageDescription('Erreur de récupération des recettes. Veuillez vérifier votre connexion au serveur.', 'messageRecipe', false));
        });

      break;

    case FETCH_RECIPES_FILTERED:
      {
        const ingredients = {
          ingredients: store.getState().recipes.inputFields.map((field) => (
            { name: field.ingredients })),
        };

        axios.post(`${API_URL}ingredient/recipeList`, ingredients)
          .then((response) => {
            store.dispatch(saveRecipesFiltered(response.data));
          })
          .catch((error) => {
            store.dispatch(setMessageDescription('Erreur de récupération des recettes', 'messageRecipe', false));
          });
        break;
      }

    case ADD_FAVORITE_RECIPE: {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        axios.post(
          `${API_URL}favorites/add/${action.newValue}`,
          {
            id: action.newValue,
          },
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        )
          .then((response) => {
            addFavoriteRecipeSession(action.newValue);
          })
          .catch((error) => {
            store.dispatch(setMessageDescription('Erreur sur l\'ajout en favoris.', 'messageRecipe', false));
          });
      }
      break;
    }
    case DELETE_FAVORITE_RECIPE: {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        axios.post(
          `${API_URL}favorites/remove/${action.newValue}`,
          {
            id: action.newValue,
          },
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        )
          .then((response) => {
            deleteFavoriteRecipeSession(action.newValue);
          })
          .catch((error) => {
            store.dispatch(setMessageDescription('Erreur sur la suppression du favoris.', 'messageRecipe', false));
          });
      }
      break;
    }

    default:
      break;
  }
  next(action);
};

export default recipesMiddleware;
