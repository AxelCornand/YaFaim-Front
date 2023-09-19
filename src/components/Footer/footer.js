import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer
    className="text-center text-white bg-navyblue mt-5"
    aria-label="footer"
  >

    <section>
      <div className="row text-center d-flex justify-content-center pt-5">
        <div className="col-md-2">
          <h3 className="text-uppercase fs-5">
            <Nav.Link
              to="/faqs"
              as={Link}
              aria-label="lien FAQ"
            >FAQ
            </Nav.Link>
          </h3>
        </div>
        <div className="col-md-2">
          <h3 className="text-uppercase fs-5">
            <Nav.Link
              to="/legal-notice"
              as={Link}
              aria-label="lien des mentions légales"
            >Mentions légales
            </Nav.Link>
          </h3>
        </div>
        <div className="col-md-2">
          <h3 className="text-uppercase fs-5">
            <Nav.Link
              to="/contact"
              as={Link}
              aria-label="lien des contacts"
            >Contact
            </Nav.Link>
          </h3>
        </div>
      </div>
    </section>
    <div style={{ borderTop: '0.5px solid #94A1C2', margin: '3em' }} />
    <section className="mb-3">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <p>
            Luttez contre le gâchis alimentaire avec <strong>Y'A FAIM</strong>
          </p>
        </div>
      </div>
    </section>

    <div className="text-center p-2 bg-darknavyblue" aria-label="copyright">
      © 2023 Copyright / MJAX
    </div>
  </footer>
);

export default Footer;
