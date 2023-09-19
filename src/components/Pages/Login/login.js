import { InputGroup, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import {
  changeFieldLogin, resetForm, submitLogin,
} from '../../../actions/user';
import ModalMessage from '../../ModalMessage/modalMessage';

function Login() {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const messageLogin = useSelector((state) => state.messages.messageLogin);
  const messageRegister = useSelector((state) => state.messages.messageRegister);
  const success = useSelector((state) => state.messages.success);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetForm());
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = formRef.current;
    if (form.checkValidity() === false) {
      setValidated(true);
      evt.preventDefault();
      evt.stopPropagation();
    }
    else {
      dispatch(submitLogin());
      setValidated(false);
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  const handlePasswordChange = (e) => {
    dispatch(changeFieldLogin(e.target.value, 'password'));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (user) {
    dispatch(resetForm());

    return <Navigate to="/" replace />;
  }

  return (
    <section className="d-flex justify-content-center">
      <div
        className="my-5 bg-meerschaum rounded p-3 p-sm-5"
        style={{ minWidth: '30%' }}
        aria-label="formulaire de login"
      >
        <h1 className="mb-5 text-center" aria-label="Titre du formulaire de login">Connexion</h1>
        <Form
          noValidate
          ref={formRef}
          validated={validated}
          onSubmit={handleSubmit}
        >

          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                autoComplete="off"
                aria-label="input de l'email"
                type="email"
                name="email"
                value={email}
                placeholder="Saisir votre email"
                onChange={(e) => {
                  dispatch(changeFieldLogin(e.target.value, 'email'));
                }}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un mail valide
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mot de passe</Form.Label>
            <div className="position-relative">
              <InputGroup
                hasValidation
              >
                <Form.Control
                  required
                  autoComplete="off"
                  aria-label="input du mot de passe"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  // pattern="/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/"
                  value={password}
                  placeholder="Saisir votre mot de passe"
                  onChange={handlePasswordChange}
                />
              </InputGroup>

              <Button
                onClick={togglePasswordVisibility}
                className="border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y"
              >
                {showPassword ? (
                  <AiOutlineEye className="p-0" color="black" />
                ) : (
                  <AiOutlineEyeInvisible className="p-0" color="black" />
                )}
              </Button>
            </div>
          </Form.Group>

          {messageLogin && (
            <ModalMessage message={messageLogin} success={success} aria-label={messageLogin} />
          )}
          {messageRegister && (
            <ModalMessage message={messageRegister} success={success} aria-label={messageRegister} />
          )}

          <div className="d-flex justify-content-center">
            <Button className="mt-3 mx-2" variant="primary" type="submit" aria-label="bouton de soumission du formulaire">
              Soumettre
            </Button>

            <Button className="mt-3 mx-2" type="reset" aria-label="bouton pour réinitialiser le formulaire" onClick={handleReset}>
              Réinitialiser
            </Button>
          </div>
        </Form>

        <Nav className="mt-4 d-flex justify-content-center">
          <Link className="px-0 mb-3 text-decoration-none" to="/register" aria-label="Pas encore inscrit ?">
            Pas encore inscrit ?
          </Link>
        </Nav>
      </div>
    </section>

  );
}

export default Login;
