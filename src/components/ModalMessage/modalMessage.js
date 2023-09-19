import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { cleanMessageDescription } from '../../actions/messages';

const ModalMessage = ({ message, success }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
      dispatch(cleanMessageDescription());
    }, 4000);
  }, []);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Y'a Faim Information</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={success ? 'text-success' : 'text-danger'}
        aria-label="Message d'information"
      >{message}
      </Modal.Body>

    </Modal>

  );
};

ModalMessage.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default ModalMessage;
