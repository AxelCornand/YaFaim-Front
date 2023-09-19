import {
  Button, Nav, Navbar,
} from 'react-bootstrap';
import logo from 'src/assets/img/logo_cloche_2_no_bg.png';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import ModalMessage from '../ModalMessage/modalMessage';
import { resetForm } from '../../actions/user';
import { resetStateRecipe } from '../../actions/recipes';
import { setMessageDescription } from '../../actions/messages';
import ThemeModeButton from '../ThemeMode/themeModeButton';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const messageLogout = useSelector((state) => state.messages.messageLogout);
  const success = useSelector((state) => state.messages.success);

  const handleLogout = (evt) => {
    evt.preventDefault();
    // delete user in sessionStorage
    sessionStorage.removeItem('user');
    dispatch(resetForm());
    dispatch(resetStateRecipe());

    navigate('/login');
    dispatch(setMessageDescription('Déconnexion réussie', 'messageLogout', true));
  };

  const activeLink = ' mx-3 fs-6 border-bottom border-3 border-salmon text-white text-decoration-none pb-2 ';
  const normalLink = ' mx-3 fs-6 text-white text-decoration-none pb-2 transition-normal';

  return (
    <header>
      <Navbar expand="lg" className="px-4 py-0" sticky="top" bg="navyblue" variant="dark" aria-label="header">
        <Navbar.Brand
          to="/"
          aria-label="lien vers l'accueil"
        >
          <Image
            src={logo}
            height="80"
            aria-label="Logo Ya Faim"
            alt="Logo Ya Faim"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="align-items-center">

            <NavLink
              to="/"
              aria-label="lien vers l'accueil"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <h1
                style={{ fontSize: '1em', marginBottom: 0 }}
              >
                Accueil Y'a Faim
              </h1>
            </NavLink>
            {currentUser && (
              <>

                <NavLink
                  to="/ingredients-filter"
                  aria-label="lien vers la page mes ingrédients en une recette"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >Mes ingrédients en une recette
                </NavLink>

                <NavLink
                  to="/favorites"
                  aria-label="lien vers la page des favoris"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}

                >Mes recettes favorites
                </NavLink>

              </>
            )}

            <NavLink
              to="/contact"
              aria-label="lien vers la page nous contacter"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >Nous contacter
            </NavLink>

            {currentUser && (currentUser.roles.includes('ROLE_ADMIN') || currentUser.roles.includes('ROLE_MANAGER')) && (

              <NavLink
                to="http://localhost:8081/back/home/"
                target="_blank"
                aria-label="lien vers le back-Office"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}

              > Back - Office
              </NavLink>

            )}
          </Nav>
          <Nav className="align-items-center">
            <ThemeModeButton />

            {!currentUser && (
              <>
                <Button
                  to="/login"
                  as={Link}
                  variant="darknavyblue"
                  size="sm"
                  className="fs-6 btn m-1 text-white"
                  aria-label="bouton pour se connecter"
                >
                  Se connecter
                </Button>
                <Button
                  className="fs-6 btn m-1 text-white"
                  to="/register"
                  as={Link}
                  variant="darksalmon "
                  size="sm"
                  aria-label="bouton pour s'inscrire"
                >
                  S'inscrire
                </Button>
              </>

            )}
            {currentUser && (
              <>
                <Tooltip
                  title="Cliquez pour modifier le profil"
                >

                  <Nav.Link
                    to="/profil"
                    as={Link}
                    className="fs-6 mx-lg-4 bg-navyblue"
                    aria-label={`Profil de ${currentUser.firstname} ${currentUser.lastname}`}
                  >
                    {`Bienvenue ${currentUser.firstname} ${currentUser.lastname}`}
                  </Nav.Link>

                </Tooltip>
                <Button
                  className="fs- btn m-1"
                  variant="darksalmon"
                  size="sm"
                  onClick={handleLogout}
                  aria-label="bouton pour se déconnecter"
                >
                  Se déconnecter
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      {
        messageLogout && (
          <ModalMessage
            message={messageLogout}
            success={success}
            aria-label={messageLogout}
          />
        )
      }

    </header>

  );
}

export default Header;
