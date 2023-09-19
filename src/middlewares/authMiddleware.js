/* eslint-disable indent */
import axios from 'axios';
import DOMPurify from 'dompurify';
import {
  CHANGE_USER,
  GET_USER_INFO,
  getUserInfo,
  REGISTER, resetForm, SUBMIT_LOGIN,
} from '../actions/user';
import { setMessageDescription } from '../actions/messages';
import { saveFavoriteRecipesId } from '../actions/recipes';

/**
 *
 * middleware for authentification login
 */

const API_URL = 'http://localhost:8081/api/';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        `${API_URL}login_check`,
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // fetch user data with token
          store.dispatch(getUserInfo(response.data.token));
        })
        .catch(() => {
          store.dispatch(setMessageDescription('Erreur de connexion', 'messageLogin', false));
        });
      break;

    case GET_USER_INFO:
      {
        axios.get(
          `${API_URL}user/info`,
          {
            headers: {
              Authorization: `Bearer ${action.value}`,
            },
          },
        )
          .then((response) => {
            const user = response.data;
            user.accessToken = action.value;
            sessionStorage.setItem('user', JSON.stringify(user));

            const userRecipeId = user.recipes.map((favoriteRecipe) => favoriteRecipe.id);

            store.dispatch(saveFavoriteRecipesId(userRecipeId));
          })
          .catch(() => {
            store.dispatch(setMessageDescription('Erreur de récupération des données utilisateur', 'messageLogin', false));
          });
        break;
      }

    case REGISTER:
      {
        const stateFirstname = store.getState().user.firstname;
        const stateLastname = store.getState().user.lastname;

        axios.post(
          `${API_URL}user`,
          {
            email: store.getState().user.email,
            password: store.getState().user.password,
            firstname: stateFirstname.charAt(0).toUpperCase() + stateFirstname.slice(1),
            lastname: stateLastname.charAt(0).toUpperCase() + stateLastname.slice(1),
          },
        )
          .then(() => {
            store.dispatch(setMessageDescription('Inscription réussie. Veuillez-vous connecter.', 'messageRegister', true));
            store.dispatch(resetForm());
          })
          .catch(() => {
            store.dispatch(setMessageDescription('Erreur d\'inscription', 'messageRegister', false));
          });
        break;
      }

    case CHANGE_USER:
      {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));

        const stateFirstname = store.getState().user.firstname;
        const stateLastname = store.getState().user.lastname;

        const data = {
          newFirstname: stateFirstname.charAt(0).toUpperCase() + stateFirstname.slice(1),
          newLastname: stateLastname.charAt(0).toUpperCase() + stateLastname.slice(1),
          newPassword: store.getState().user.password,
        };

        const headers = {
          Authorization: `Bearer ${currentUser.accessToken}`,
        };

        axios.post(`${API_URL}changeUser`, data, { headers })
          .then(() => {
            store.dispatch(getUserInfo(currentUser.accessToken));
            store.dispatch(setMessageDescription('Modification de profil effectuée.', 'messageModification', true));
            store.dispatch(resetForm());
          })
          .catch(() => {
            store.dispatch(resetForm());
            store.dispatch(setMessageDescription('Erreur sur la modification.', 'messageModification', false));
          });
        store.dispatch(resetForm());
        break;
      }

    default:
      next(action);
  }
};

export default authMiddleware;
