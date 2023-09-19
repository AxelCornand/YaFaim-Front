/* eslint-disable max-len */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { InputGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import { RiInformationLine } from 'react-icons/ri';
import {
  changeFieldRegister, changeUser, fetchNameForRegister, setIsMatchPassword,
} from '../../../actions/user';
import { isTokenOk } from '../../../utils/functions';
import { setMessageDescription } from '../../../actions/messages';

function UserProfil() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const password = useSelector((state) => state.user.password);
  const confirmpassword = useSelector((state) => state.user.confirmpassword);
  const isMatchPassword = useSelector((state) => state.user.isMatchPassword);

  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    dispatch(fetchNameForRegister(user.firstname, user.lastname));
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    if (!isTokenOk()) {
      dispatch(setMessageDescription('Session expirée. Veuillez vous reconnecter.', 'messageLogin', false));
      navigate('/login', { replace: true });
    }
  }, [user, dispatch, navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = formRef.current;
    if (form.checkValidity() === false || !isMatchPassword) {
      setValidated(true);
      evt.preventDefault();
      evt.stopPropagation();
    }
    else {
      dispatch(changeUser());
      setValidated(false);
      navigate('/login');
    }
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
    <section style={{ display: 'flex', justifyContent: 'center' }} aria-label="Fiche profil de l'utilisateur">
      <div
        style={{ minWidth: '50%' }}
        className="my-5 bg-meerschaum rounded p-5"
      >
        <h1 className="mb-5 text-center">Modification de profil</h1>
        <Form
          noValidate
          ref={formRef}
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3"
            controlId="formLastname"
          >
            <Form.Label>Nom</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                defaultValue={user.lastname}
                required
                name="lastname"
                pattern="^[a-zA-ZÀ-ÿ'-]{1,20}$"
                aria-label="Nom"
                onChange={(e) => {
                  dispatch(changeFieldRegister(e.target.value, 'lastname'));
                }}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un nom valide.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formFirstname"
          >
            <Form.Label>Prénom</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="text"
                required
                defaultValue={user.firstname}
                name="firstname"
                aria-label="Prénom"
                pattern="^[a-zA-ZÀ-ÿ'-]{1,20}$"
                onChange={(e) => {
                  dispatch(changeFieldRegister(e.target.value, 'firstname'));
                }}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un prénom valide.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formEmail"
          >
            <Form.Label>E-mail</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                aria-label="Email"
                disabled
                value={user.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Veuillez entrer un mail valide
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="formPassword"
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
                type={showPassword ? 'text' : 'password'}
                aria-label="Mot de passe"
                autoComplete="off"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                name="password"
                value={password}
                onChange={(e) => {
                  dispatch(changeFieldRegister(e.target.value, 'password'));
                }}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Le mot de passe saisi est invalide.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="formConfirmPassword"
          >
            <Form.Label
              className="text-navyblue"
            >Confirmer le mot de passe
            </Form.Label>
            <InputGroup
              hasValidation
            >
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                aria-label="Confirmation du mot de passe"
                autoComplete="off"
                required
                value={confirmpassword}
                name={confirmpassword}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                onChange={(e) => {
                  dispatch(changeFieldRegister(e.target.value, 'confirmpassword'));
                }}
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
            className="mt-3"
            style={{ userSelect: 'none' }}
            type="checkbox"
            onClick={togglePasswordVisibility}
            aria-label="Checkbox"
            label="Voir le mot de passe"
          />
          <Button
            className="mt-3"
            variant="primary"
            type="submit"
            aria-label="bouton pour enregistrer les modifications de son profil"
          >
            Enregistrer
          </Button>

        </Form>
      </div>
    </section>

  );
}

export default UserProfil;
