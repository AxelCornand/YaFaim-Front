/* eslint-disable max-len */

import { Container, Image } from 'react-bootstrap';
import image from '../../../assets/img/faqs.png';

const Faqs = () => (
  <Container className="bg-white py-2 ">
    <section className="faqs px-3 py-3" aria-label="Foire aux questions">
      <div
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '0.5em',
        }}
      >
        <h1 style={{ fontSize: 'xx-large', textAlign: 'center', color: '#4a536b' }}>FAQ - Foire aux questions</h1>
        <div
          style={{
            fontSize: '0.8em', display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '1em',
          }}
          aria-label="Date de publication"
        >
          <span>Le 12/04/2023</span>
        </div>
        <Image className="image_faq" alt="faq" src={image} width="100%" rounded aria-label="Image des foires aux questions" />
      </div>
      <h2
        style={{
          fontSize: 'x-large', marginBottom: '0.8em', marginTop: '1.4em', color: '#4a536b',
        }}
        aria-label="Qui est derrière Y'a faim ?"
      >Qui est derrière Y'a faim ?
      </h2>
      <p style={{
        paddingBottom: '0.1em',
      }}
      >
        Ce sont quatre élèves de l'école O'Clock : Xavier, Axel, Jérémy et Mégane !
      </p>
      <h2
        style={{
          fontSize: 'x-large', marginBottom: '0.8em', marginTop: '1.4em', color: '#4a536b',
        }}
        aria-label="Comment chercher une recette"
      >
        Je cherche une recette, comment faire ?
      </h2>
      <p style={{
        paddingBottom: '0.1em',
      }}
      >
        Il vous suffit d'utiliser notre barre de recherche et d'y associer les filtres catégories (entrée/plat/dessert) et/ou régime alimentaire (végétarien, vegan, sans gluten) si vous le souhaitez. Cliquez sur le bouton "Recherchez" afin de visualiser toutes les recettes correspondant à votre recherche.
      </p>
      <h2
        style={{
          fontSize: 'x-large', marginBottom: '0.8em', marginTop: '1.4em', color: '#4a536b',
        }}
        aria-label="Comment filtrer les recettes en fonction des ingrédients dont je dispose chez moi ?"
      >
        Comment filtrer les recettes en fonctions des ingrédients dont je dispose chez moi ?
      </h2>
      <p style={{
        paddingBottom: '0.1em',
      }}
      >
        Pour accéder à cette fonctionnalité, vous devez avoir un compte Y'a faim ! Ensuite, il vous suffira de vous rendre dans la rubrique "Mes ingrédients en une recette" et entrer chaque ingrédient dont vous disposez dans les champs prévus à cet effet. Un nouveau champ s'ouvre une fois que vous aurez appuyer sur "entrée" de votre clavier. Une fois tous les ingrédients saisis, il ne vous reste plus qu'à cliquer sur le bouton "Recherchez".
      </p>
      <h2
        style={{
          fontSize: 'x-large', marginBottom: '0.8em', marginTop: '1.4em', color: '#4a536b',
        }}
        aria-label="Comment créer un compte Y'a faim ?"
      >
        Comment créer un compte Y'a faim ?
      </h2>
      <p style={{
        paddingBottom: '0.1em',
      }}
      >
        Vous n'avez pas encore de compte chez nous mais vous souhaitez vous inscrire ? Cliquez sur le bouton "Connexion" puis sur le lien "Pas encore inscrit ?". Vous serez alors automatiquement redirigé.e vers notre formulaire d'inscription. Vous devrez alors y renseigner votre prénom votre adresse mail, votre mot de passe et la confirmation de ce dernier pour éviter toutes mauvaises surprises lors de votre prochaine connexion (ueh oui, ne faute de frappe est vite arrivée !). Une fois que vous aurez rempli toutes ces informations, il ne vous restera plus qu'à cliquer sur le bouton "Je m'inscris".
      </p>
      <h2
        style={{
          fontSize: 'x-large', marginBottom: '0.8em', marginTop: '1.4em', color: '#4a536b',
        }}
        aria-label="Comment réinitialiser votre mot de passe"
      >
        Vous avez oublié votre mot de passe ?
      </h2>
      <p style={{
        paddingBottom: '0.1em',
      }}
      >
        Pas de panique ! Sur notre formulaire de connexion se trouve un lien "Mot de passe oublié ?" afin de réinitialiser votre mot de passe. Vous recevrez alors un mail sur la boîte mail enregistrée lors de votre inscription sur le site.
      </p>
      <span style={{ fontSize: '0.8em', paddingTop: '5em' }}><strong>Source image</strong> : Mahesh Patel de <a target="blank" href="https://pixabay.com/fr/">Pixabay</a></span>
    </section>
  </Container>
);

export default Faqs;
