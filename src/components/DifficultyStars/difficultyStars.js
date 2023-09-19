/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const DifficultyStars = ({ difficulty }) => {
  const filledStars = difficulty;
  const emptyStars = 5 - difficulty;

  return (
    <>
      {/* create an empty array of length filledStars (...Array to have distinct elements) */}
      {[...Array(filledStars)].map((_, index) => (
        <FaStar
          //  it allows to have a unique key
          key={`step-${index}-${Date.now()}`}
          color="gold"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={`step-${index}-${Date.now()}`}
          color="lightgray"
        />
      ))}
    </>
  );
};

DifficultyStars.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default DifficultyStars;
