/* eslint-disable max-len */
import { Card, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DifficultyStars from '../DifficultyStars/difficultyStars';
import { addFavoriteRecipe, deleteFavoriteRecipe } from '../../actions/recipes';
import { isTokenOk } from '../../utils/functions';

const CardRecipe = ({
  poster, name, cooktime, preptime, difficulty, slug, id,
}) => {
  const dispatch = useDispatch();
  const favoriteRecipeInState = useSelector((state) => state.recipes.favoriteRecipesId);

  const isFavorite = favoriteRecipeInState.includes(id);
  const [favorite, setFavorite] = useState(isFavorite);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleAddRecipe = () => {
    dispatch(addFavoriteRecipe(id));
    setFavorite(!isFavorite);
  };
  const handleDeleteRecipe = () => {
    dispatch(deleteFavoriteRecipe(id));
    setFavorite(!isFavorite);
  };

  return (
    <Col>
      <Container>

        <Card className="p-0 box anim position-relative">
          <Card.Header
            className="text-center text-white bg-navyblue"
            style={{
              fontSize: '1em', width: 'auto', height: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          >{name}
          </Card.Header>

          {(user && isTokenOk())
            && (

              favorite ? (
                // red hearts
                <FcLike
                  size="1.5em"
                  title="supprimer la recette des favoris"
                  className="position-absolute top-0 start-100 translate-middle"
                  onClick={() => handleDeleteRecipe(id)}
                />
              )
                : (
                  // transparent hearts
                  <FcLikePlaceholder
                    size="1.5em"
                    title="ajouter la recette aux favoris"
                    className="position-absolute top-0 start-100 translate-middle"
                    onClick={() => handleAddRecipe(id)}

                  />
                )
            )}

          <Link to={`/recipe/${slug}`} className="text-decoration-none text-navyblue" aria-label={`Recipe: ${name}`}>
            <Card.Img
              style={{ width: '100%', height: '11em' }}
              variant="top"
              src={poster}
              alt={name}
            />

            <Card.Body>
              <Card.Text
                className="text-center text-navyblue"
                aria-label="Bouton lire la recette"
                style={{
                  fontSize: 'small',
                }}
              >
                Lire la recette
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <small
                style={{ fontSize: 'small' }}
                className="text-muted text-center"
                aria-label={`Difficulté: ${difficulty}`}
              ><span>Difficulté :</span>
                <DifficultyStars
                  difficulty={difficulty}
                />
              </small>
              <small
                style={{ fontSize: 'small' }}
                className="text-muted text-center"
                aria-label={`Temps de préparation: ${preptime}`}
              ><span>Temps de préparation :</span> {preptime} min
              </small>
              <small
                style={{ fontSize: 'small' }}
                className="text-muted text-center"
                aria-label={`Temps de cuisson: ${cooktime}`}
              ><span>Temps de cuisson :</span> {cooktime} min
              </small>
            </Card.Footer>
          </Link>
        </Card>
      </Container>

    </Col>

  );
};

CardRecipe.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.any.isRequired,
  cooktime: PropTypes.any.isRequired,
  preptime: PropTypes.any.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardRecipe;
