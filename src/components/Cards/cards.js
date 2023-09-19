/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import {
  Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardRecipe from './cardRecipe';

const Cards = ({ recipes }) => {
  const searchName = useSelector((state) => state.recipes.searchName);
  const categorySelector = useSelector((state) => state.recipes.categorySelector);
  const dietSelector = useSelector((state) => state.recipes.dietSelector);
  // const searchByIngredient = useSelector((state) => state.recipes.inputFields.map((i) => i.ingredients));

  // normalize() is an Unicode normalization is a process used to transform different representations of the same sequence of characters into a standardized form.

  return (
    <section aria-label="Toutes les recettes">
      <Row xs={1} sm={2} md={1} lg={2} xl={3} className="g-4">
        {recipes
          // we filter based on recipe names
          .filter((recipe) => {
            return recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
          })
          // we filter based on category of the recipes
          .filter((recipe) => {
            if (categorySelector === 'Toutes les catégories') {
              return true;
            }
            return recipe.category.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(categorySelector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
          })
          // we filter based on diet of the recipes
          .filter((recipe) => {
            if (dietSelector === 'Tous les régimes alimentaires') {
              return true;
            }
            return recipe.diet.map((i) => (i.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))).includes(dietSelector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
          })

          // and we map on the recipes
          .map((recipe) => (
            <CardRecipe key={recipe.id} {...recipe} />

          ))}
      </Row>
    </section>
  );
};

Cards.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Cards.defaultProps = {
  recipes: null,
};

export default Cards;
