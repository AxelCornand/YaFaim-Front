/* eslint-disable max-len */
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { TextField } from '@mui/material';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SearchAndFilters from '../../SearchAndFilters/searchAndFilters';
import Cards from '../../Cards/cards';
import {
  setInputFields, fetchRecipesFiltered, setRecipesFiltered,
} from '../../../actions/recipes';
import { isTokenOk } from '../../../utils/functions';
import Loading from '../../Loading/loading';
import { setMessageDescription } from '../../../actions/messages';

function IngredientsFilter() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const inputFields = useSelector((state) => state.recipes.inputFields);
  const isFiltered = useSelector((state) => state.recipes.isFiltered);
  const recipesFiltered = useSelector((state) => state.recipes.recipesFiltered);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(resetFilters());
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    if (!isTokenOk()) {
      dispatch(setMessageDescription('Session expirée. Veuillez vous reconnecter.', 'messageLogin', false));
      navigate('/login', { replace: true });
    }
  }, [user, dispatch, navigate]);

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    dispatch(setInputFields(newInputFields));
  };

  const handleAddFields = () => {
    const nextId = Math.max(...inputFields.map((ingredient) => ingredient.id)) + 1;
    dispatch(setInputFields([...inputFields, { id: nextId, ingredients: '' }]));
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(values.findIndex((value) => value.id === id), 1);
    dispatch(setInputFields(values));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchRecipesFiltered());
  };

  // here we create a function to create a reset button and allow the my ingredients page in a recipe to return to the initial state on the recipeList table after using the filter by ingredient adn to empty the inputs
  const handleReset = () => {
    const resetInputFields = inputFields.map((field) => ({
      id: field.id,
      ingredients: '',
    }));
    dispatch(setInputFields(resetInputFields));
    dispatch(setRecipesFiltered(false));
  };

  return (

    recipes ? (
      <Row aria-label="filtre par ingrédient">
        <Col xs={12} md={6} lg={4}>
          <SearchAndFilters />
          <Container>
            <Form
              className="my-4 bg-meerschaum rounded  p-3"
              style={{ color: '#4a536b' }}
              aria-label="formulaire du filtre par ingrédient"
              onSubmit={handleSubmit}
              validated={isFiltered}
            >
              <Form.Label>Les aliments à utiliser pour ma recette</Form.Label>
              {inputFields.map((inputField) => (
                <Row className="align-items-center mb-2" key={inputField.id}>
                  <Col xs={9}>
                    <TextField
                      className="w-100"
                      name="ingredients"
                      variant="standard"
                      label="Nom de l'ingredient"
                      aria-label="input pour entrer son ingrédient"
                      value={inputField.ingredients}
                      onChange={(event) => handleChangeInput(inputField.id, event)}
                    />
                  </Col>
                  <Col>
                    <Button
                      disabled={inputFields.length === 5}
                      variant="link"
                      onClick={handleAddFields}
                      className="p-0"
                      aria-label="Ajouter l'input d'un nouvel ingrédient à filtrer"
                    >
                      <AiOutlinePlus />
                    </Button>
                    <Button
                      variant="link"
                      className="p-0"
                      aria-label="Retirer l'input d'un nouvel ingrédient à filtrer"
                      disabled={inputFields.length === 1}
                      onClick={() => handleRemoveFields(inputField.id)}
                    >
                      <AiOutlineMinus />
                    </Button>
                  </Col>
                </Row>
              ))}
              <Container style={{ display: 'flex', alignItems: 'center', paddingLeft: '0' }}>
                <Button
                  className="mt-4 mb-2 ml-0"
                  variant="navyblue"
                  type="submit"
                  style={{ width: 'auto', fontSize: '0.8em', margin: '0.5em' }}
                  aria-label="Soumettre le formulaire pour filter les recettes par ingrédient"
                >
                  Filtrer
                </Button>
                <Button
                  className="mt-3 ml-0"
                  style={{ width: 'auto', fontSize: '0.8em' }}
                  variant="darksalmon"
                  type="reset"
                  onClick={handleReset}
                  aria-label="réinitialiser le formulaire de filtre par ingrédient"
                >
                  Réinitialiser
                </Button>
              </Container>
            </Form>
          </Container>
        </Col>
        <Col>
          <Cards recipes={isFiltered ? recipesFiltered : recipes} />
        </Col>
      </Row>
    ) : (
      <Loading />
    )
  );
}
export default IngredientsFilter;
