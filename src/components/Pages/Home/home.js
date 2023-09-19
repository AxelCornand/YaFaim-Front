import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import WelcomeMessage from '../../WelcomeMessage/welcomeMessage';
import SearchAndFilters from '../../SearchAndFilters/searchAndFilters';
import Cards from '../../Cards/cards';
import Loading from '../../Loading/loading';
import ModalMessage from '../../ModalMessage/modalMessage';
import { resetFilters } from '../../../actions/recipes';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const messageRecipe = useSelector((state) => state.messages.messageRecipe);
  const messageContact = useSelector((state) => state.messages.messageContact);
  const success = useSelector((state) => state.messages.success);
  const messageModification = useSelector((state) => state.messages.messageModification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, []);

  return (

    <>
      <section className="mb-2" aria-label="Page d'accueil">
        <Row className="gx-0">
          <WelcomeMessage />
        </Row>
      </section>
      <section className="mr-5">
        <Row>
          <Col xs={12} md={5} lg={4}>
            <SearchAndFilters />
          </Col>
          <Col>
            {
              recipes ? (
                <Cards
                  recipes={recipes}
                />
              )
                : (
                  <Loading />
                )
            }
          </Col>
        </Row>
      </section>

      {
        // messageRecipe is not empty if an error is present on API return
        messageRecipe && (
          <ModalMessage
            message={messageRecipe}
            success={success}
            aria-label={messageRecipe}
          />
        )
      }
      {

        // messageModification is not empty if there was a profile modification
        messageModification && (
          <ModalMessage
            message={messageModification}
            success={success}
            aria-label={messageModification}
          />
        )
      }

      {
        !recipes && (
          <Loading />
        )
      }

      {
        // if the form is submitted, we display the confirmation message
        // otherwise we display the form
        messageContact && (
          <ModalMessage
            message={messageContact}
            success={success}
            aria-label={messageContact}
          />
        )
      }
    </>
  );
};
export default Home;
