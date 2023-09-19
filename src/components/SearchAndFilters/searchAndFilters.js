import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputSearchName, changeCategorySelector, changeDietSelector } from '../../actions/recipes';

const SearchAndFilters = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.recipes.searchName);
  const categoryValue = useSelector((state) => state.recipes.categorySelector);
  const dietValue = useSelector((state) => state.recipes.dietSelector);

  return (
    <Container>
      <Form
        className="mb-3 w-80 bg-meerschaum rounded p-4"
        aria-label="Recherche et filtres"
      >
        <Form.Group className="mb-3" controlId="formSearchFilters">
          <Form.Control
            type="text"
            className="text-center"
            placeholder="Saisir un mot..."
            value={searchValue}
            onChange={(event) => {
              dispatch(changeInputSearchName(event.target.value));
              // console.log(event.target.value);
            }}
            aria-label="Recherche"
          />
        </Form.Group>
        <Form.Select
          className="mb-2"
          aria-label="Catégorie de recette"
          style={{ color: '#4a536b' }}
          value={categoryValue}
          onChange={(event) => {
            // console.log(event.target.value);
            dispatch(changeCategorySelector(event.target.value));
          }}
        >
          <option value="Toutes les catégories">Toutes les catégories</option>
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </Form.Select>
        <Form.Select
          aria-label="Régime alimentaire"
          style={{ color: '#4a536b' }}
          value={dietValue}
          onChange={(event) => {
            // console.log(event.target.value);
            dispatch(changeDietSelector(event.target.value));
          }}
        >
          <option value="Tous les régimes alimentaires">Tous les régimes alimentaires</option>
          <option value="Végétarien">Végétarien</option>
          <option value="Vegan">Vegan</option>
          <option value="Sans gluten">Sans gluten</option>
          <option value="Sans lactose">Sans lactose</option>
        </Form.Select>
      </Form>
    </Container>
  );
};

export default SearchAndFilters;
