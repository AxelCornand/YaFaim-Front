import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { addFavoriteRecipe, deleteFavoriteRecipe } from '../../actions/recipes';
import { isTokenOk } from '../../utils/functions';

const RecipeHeader = ({ name, poster, recipeId }) => {
  const dispatch = useDispatch();
  const favoriteRecipeID = useSelector((state) => state.recipes.favoriteRecipesId);

  const isFavorite = favoriteRecipeID.includes(recipeId);
  const [favorite, setFavorite] = useState(isFavorite);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleAddRecipe = () => {
    dispatch(addFavoriteRecipe(recipeId));
    setFavorite(!isFavorite);
  };
  const handleDeleteRecipe = () => {
    dispatch(deleteFavoriteRecipe(recipeId));
    setFavorite(!isFavorite);
  };

  return (
    <Row className="p-3" aria-label="header de la recette détaillée">
      <h1
        className="mb-4 text-center"
        style={{ textShadow: '15px 15px 15px black', color: 'white' }}
        aria-label={`Titre: ${name}`}
      >{name}
      </h1>
      {(user && isTokenOk() && favorite)

        && (
          <FcLike
            size="2em"
            className="mb-3"
          />
        )}

      <div
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Image
          src={poster}
          className="mb-2 img-fluid hover-shadow box"
          fluid
          aria-label="Image de la recette"
        />

      </div>

      {(user && isTokenOk())

        && (
          favorite ? (

            <Button
              className="text-decoration-none"
              style={{ textShadow: '15px 15px 15px black', color: 'white' }}
              onClick={handleDeleteRecipe}
              aria-label="Supprimer aux recettes favorites"
            >Supprimer des recettes favorites
            </Button>
          ) : (
            <Button
              className="text-decoration-none"
              style={{ textShadow: '15px 15px 15px black', color: 'white' }}
              onClick={handleAddRecipe}
              aria-label="Ajouter aux recettes favorites"
            >Ajouter aux recettes favorites
            </Button>
          )
        )}

      <div style={{ borderTop: '1px solid white', marginBottom: '2em', marginTop: '2em' }} />
    </Row>
  );
};

RecipeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  recipeId: PropTypes.number.isRequired,
};

export default RecipeHeader;
