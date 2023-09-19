/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
import { validateContactForm } from '../../../actions/user';
import { setMessageDescription } from '../../../actions/messages';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidateContactForm = useSelector((state) => state.user.isValidateContactForm);
  const form = useRef();

  // here we create a function to submit the form by adding the different actions needed
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // here we check if the characters entered by the user correspond to those expected in the HTML patterns
    if (evt.currentTarget.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    else {
      // Clean the form values using DOMPurify before submitting
      const formData = new FormData(form.current);

      const cleanedFormData = {};
      formData.forEach((value, key) => {
        cleanedFormData[key] = DOMPurify.sanitize(value);
      });

      // here we pass our boolean contactform to true to validate the submission of the form and validate the display isSubmittedContact

      // here we use emailjs to link the form submission to an email address
      emailjs.send('service_dhwqdlo', 'template_3ostubr', cleanedFormData, '6GXpG7XEFNMiLD824').then(
        (result) => {
          dispatch(setMessageDescription('Merci pour votre message ! Nous reviendrons vers vous dans les plus brefs délais.', 'messageContact', true));
          navigate('/', { replace: true });
          dispatch(validateContactForm(false));
          form.current.reset();
        },
        (error) => {
          dispatch(setMessageDescription('Erreur d\'envoi du message.', 'messageContact', false));
        },
      );
    }
    // we validate the correct conformity of the form
    dispatch(validateContactForm(true));
  };

  // // here we create a function to reset the contact form without needing to reload the page
  // const handleReset = () => {
  // };

  return (
    <section className="d-flex justify-content-center">
      <div
        className=" my-5 bg-meerschaum rounded p-3 p-sm-5"
        style={{ minWidth: '50%' }}
      >
        <h1 className="mb-5 text-center">Contactez-nous</h1>
        <p className="mb-0">Vous avez des questions ou des suggestions ?</p>
        <p className="mb-5">Contactez-nous via ce formulaire !</p>
        <Form
          noValidate
          validated={isValidateContactForm}
          ref={form}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          // the aria labeledby identifies the element that labels the element to which it applies
          aria-labelledby="contact-form"
        >
          <Form.Group className="mb-3" controlId="formBasicFirstnam">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Prénom" name="name" pattern="[A-Za-z]{1,20}" required aria-label="Input pour le prénom" />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un prénom. Les chiffres et caractères spéciaux ne sont pas autorisés.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Saisir votre email" name="email" required aria-label="Input pour l'email" />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mail valide.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" controlId="FormControlObjet">
            <Form.Label>Objet</Form.Label>
            <Form.Control type="text" placeholder="Objet" name="objet" required aria-label="Input pour l'objet du message" />
            <Form.Control.Feedback type="invalid">
              Veuillez renseigner un objet.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" controlId="FormControlMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Saisissez votre message" name="message" required aria-label="Input pour le message" />
            <Form.Control.Feedback type="invalid">
              Veuillez rédiger votre message.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className="mt-3"
            variant="primary"
            type="submit"
            aria-label="Bouton pour soumettre le formulaire"
          >
            Envoyer
          </Button>

          <Button
            className="mt-3 mx-2"
            type="reset"
            aria-label="bouton pour réinitialiser le formulaire"
            // onClick={handleReset}
          >
            Réinitialiser
          </Button>
        </Form>
      </div>

    </section>

  );
};

export default Contact;
