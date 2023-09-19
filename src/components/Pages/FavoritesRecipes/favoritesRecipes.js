import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cards from '../../Cards/cards';
import { isTokenOk } from '../../../utils/functions';
import Loading from '../../Loading/loading';
import { setMessageDescription } from '../../../actions/messages';
import { resetFilters } from '../../../actions/recipes';

const FavoritesRecipes = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const favoriteRecipesId = useSelector((state) => state.recipes.favoriteRecipesId);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteRecipes = recipes.filter((recipe) => favoriteRecipesId.includes(recipe.id));

  useEffect(() => {
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    if (!isTokenOk()) {
      dispatch(setMessageDescription('Session expirée. Veuillez vous reconnecter.', 'messageLogin', false));
      navigate('/login', { replace: true });
    }
  }, [user, dispatch, navigate]);

  return (
    <Container fluid>
      {favoriteRecipes.length ? (
        <>
          <h1 className="mb-5" style={{ textShadow: '15px 15px 15px black', color: 'white' }}>
            Mes recettes favorites
          </h1>
          <section>
            <Row>
              <Col xl={10}>
                <Cards recipes={favoriteRecipes} />
              </Col>
            </Row>
          </section>
        </>
      ) : (
        <h1 className="mb-5" style={{ color: 'white' }}>
          Aucune recette en favoris.
        </h1>
      )}
      {
        !recipes && (
          <Loading />
        )
      }
    </Container>
  );
};

export default FavoritesRecipes;
