import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';
import DifficultyStars from '../DifficultyStars/difficultyStars';

const IngredientsAndInfos = ({ list, preparation }) => (
  <Col
    className="prepIngredient"
    aria-label="Ingredients et Informations"
  // style={{ marginBottom: '2em' }}
  >
    <section
      className="preptime my-2 bg-white rounded p-5"
      style={{ color: '#4a536b', margin: '1em' }}
    >
      <h2
        className="mb-4 text-center fs-3"
        aria-label="Preparation"

      >
        Préparation
      </h2>
      <div style={{ borderTop: '1px solid #4a536b', marginBottom: '2em', marginTop: '2em' }} />
      <div style={{ fontsize: 'x-larger' }}>
        <p>Difficulté :
          <DifficultyStars
            difficulty={preparation.difficulty}
          />
        </p>
        <p>Temps de cuisson : {preparation.cooktime} min</p>
        <p>Temps de préparation : {preparation.preptime} min</p>
      </div>
    </section>
    <section
      className="ingredient my-2 bg-navyblue rounded p-5"
      style={{ color: 'white', margin: '1em' }}
    >
      <h2
        className="mb-4 text-center fs-3"
        aria-label="Liste des ingredients"
      >
        Les ingrédients
      </h2>
      <div style={{ borderTop: '1px solid white', marginBottom: '2em', marginTop: '2em' }} />
      <ul style={{ padding: '0', fontsize: 'x-larger' }}>
        {list.map((i) => (
          <li key={i.ingredient.id} className="mb-2">&#8226; {i.ingredient.name} : {i.quantity} {i.measure}</li>
        ))}
      </ul>
    </section>
  </Col>
);

IngredientsAndInfos.propTypes = {
  preparation: PropTypes.shape({
    difficulty: PropTypes.number.isRequired,
    preptime: PropTypes.number.isRequired,
    cooktime: PropTypes.number.isRequired,
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

IngredientsAndInfos.defaultProps = {
  preparation: null,
};

export default IngredientsAndInfos;
