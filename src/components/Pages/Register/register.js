/* eslint-disable max-len */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Popover from 'react-bootstrap/Popover';
import { RiInformationLine } from 'react-icons/ri';
import { OverlayTrigger } from 'react-bootstrap';
import ModalMessage from '../../ModalMessage/modalMessage';
import {
  changeFieldRegister, register, resetForm, setIsMatchPassword,

} from '../../../actions/user';
import { setMessageDescription } from '../../../actions/messages';

function Register() {
  const email = useSelector((state) => state.user.email);
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const password = useSelector((state) => state.user.password);
  const confirmpassword = useSelector((state) => state.user.confirmpassword);
  const isMatchPassword = useSelector((state) => state.user.isMatchPassword);

  const messageRegister = useSelector((state) => state.messages.messageRegister);
  const success = useSelector((state) => state.messages.success);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    dispatch(resetForm());
  }, []);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = formRef.current;
    if (form.checkValidity() === false || !isMatchPassword) {
      setValidated(true);
      evt.preventDefault();
      evt.stopPropagation();
    }
    else {
      dispatch(register());
      setValidated(false);
      navigate('/login');
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
    setValidated(false);
    dispatch(setMessageDescription(''));
  };

  const handleChangeField = (value, input) => {
    dispatch(changeFieldRegister(value, input));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (password === confirmpassword) {
      dispatch(setIsMatchPassword(true));
    }
    else {
      dispatch(setIsMatchPassword(false));
    }
  }, [password, confirmpassword]);

  const popover = (
    <Popover>
      <Popover.Body>
        Le mot de passe doit contenir au minimum 8 caractères,
        dont une minuscule, une majuscule, un chiffre et un caractère spécial (!@#$%^&*()_+).
      </Popover.Body>
    </Popover>
  );

  return (
    <section className="d-flex justify-content-center ">
      <div
        className="my-5 bg-meerschaum rounded p-3 p-sm-5"
        style={{ minWidth: '50%' }}
        aria-label="formulaire d'inscription"
      >
        <h1
          className="mb-5 text-center"
        >
          Inscription
        </h1>

        <Form
          noValidate
          ref={formRef}
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Nom</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Saisir votre nom"
                value={lastname}
                pattern="^[a-zA-ZÀ-ÿ'-]{1,20}$"
                name="lastname"
                aria-label="input pour le nom de famille"
                onChange={(e) => handleChangeField(e.target.value, 'lastname')}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un nom valide.
              </Form.Control.Feedback>
            </InputGroup>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Prénom</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Saisir votre prénom"
                value={firstname}
                pattern="^[a-zA-ZÀ-ÿ'-]{1,20}$"
                name="firstname"
                aria-label="input pour le prénom"
                onChange={(e) => handleChangeField(e.target.value, 'firstname')}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un prénom valide.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                required
                placeholder="Saisir votre email"
                aria-label="input pour le mail"
                value={email}
                name="email"
                onChange={(e) => handleChangeField(e.target.value, 'email')}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un mail valide
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="formBasicPassword"
            autoComplete="off"
          >
            <Form.Label>Mot de passe</Form.Label>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="right"
              overlay={popover}
            >
              <Button variant="transparent"><RiInformationLine size="1.3em" /></Button>

            </OverlayTrigger>
            <InputGroup
              hasValidation
            >
              <Form.Control
                required
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                placeholder="Saisir votre mot de passe"
                aria-label="input pour le mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                value={password}
                name="password"
                onChange={(e) => handleChangeField(e.target.value, 'password')}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                Le mot de passe saisi est invalide.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formConfirmPassword">
            <Form.Label>Confirmation du mot de passe</Form.Label>

            <InputGroup
              hasValidation
            >
              <Form.Control
                required
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirmer votre mot de passe"
                aria-label="input pour la confirmation du mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                value={confirmpassword}
                name="confirmpassword"
                onChange={(e) => handleChangeField(e.target.value, 'confirmpassword')}
              />
            </InputGroup>

            {!isMatchPassword && (
              <Form.Text
                className="text-danger"
              >
                Les mots de passe ne correspondent pas.
              </Form.Text>
            )}

          </Form.Group>
          <Form.Check
            className="mt-4"
            style={{ userSelect: 'none' }}
            type="checkbox"
            onClick={togglePasswordVisibility}
            aria-label="Checkbox"
            label="Voir le mot de passe"
          />

          <div
            className="d-flex justify-content-center"
          >
            <Button
              className="mt-3"
              variant="primary"
              type="submit"
              aria-label="bouton de soumission du formulaire s'inscrire"
            >
              S'inscrire
            </Button>

            <Button
              className="mt-3 mx-3"
              type="reset"
              onClick={handleReset}
              aria-label="bouton pour réinitialiser le formulaire"
            >
              Réinitialiser
            </Button>
          </div>
          {messageRegister && (
            <ModalMessage
              message={messageRegister}
              success={success}
              aria-label={messageRegister}
            />
          )}
        </Form>
      </div>
    </section>

  );
}

export default Register;
