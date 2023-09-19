/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { findRecipe } from 'src/selectors/recipes';
import { useEffect } from 'react';
import IngredientsAndInfos from './ingredientsAndInfos';
import Instructions from './instructions';
import RecipeFooter from './recipeFooter';
import RecipeHeader from './recipeHeader';
import Loading from '../Loading/loading';
import { isTokenOk } from '../../utils/functions';
import { setMessageDescription } from '../../actions/messages';

const Recipe = () => {
  const param = useParams();
  const recipes = useSelector((state) => state.recipes.list);
  const recipe = findRecipe(recipes, param.slug);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isTokenOk()) {
      dispatch(setMessageDescription('Session expirée. Veuillez vous reconnecter.', 'messageLogin', false));
      navigate('/login', { replace: true });
    }
  }, [user, dispatch, navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      {
        recipe ? (
          <div className="recipe" style={{ display: 'flex', flexDirection: 'column', width: '90%' }} aria-label={recipe.name}>
            {/* transmission of the name and image of a recipe to the HeaderRecipe component */}
            <RecipeHeader
              name={recipe.name}
              poster={recipe.poster}
              recipeId={recipe.id}
            />
            {/* transmission of the ingredients list and text of the preparation of a recipe to the IngredientsAndInfos component */}
            <IngredientsAndInfos
              list={recipe.recipeIngredient}
              preparation={recipe}
            />
            {/* transmission of the instructions of a recipe to the Instructions component */}
            <Instructions
              instructions={recipe.instruction}
            />
            <RecipeFooter
              slug={recipe.slug}
              name={recipe.name}
            />
          </div>
        )
          : (
            <Loading />
          )
      }
    </div>
  );
};

export default Recipe;
