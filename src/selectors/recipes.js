/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes
 * @param {string} searchedSlug
 * @return {Object}
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}
