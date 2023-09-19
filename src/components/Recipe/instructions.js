/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import PropTypes from 'prop-types';

const Instructions = ({ instructions }) => {
  const finalText = instructions.split('.').map((str, index) => <p key={`step-${index}-${Date.now()}`}>Etape {index + 1} : {str}</p>);
  // console.log(finalText);

  return (
    <section
      className="preptime my-2 bg-white rounded p-5"
      style={{ color: '#4a536b', margin: '1em' }}
    >
      <h3 className="mt-2 mb-4">Instructions</h3>
      <div style={{ borderTop: '1px solid #4a536b', marginBottom: '2em', marginTop: '2em' }} />
      <div className="text" style={{ textAlign: 'left' }}>{finalText}</div>
    </section>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
