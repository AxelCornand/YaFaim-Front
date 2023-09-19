/* eslint-disable max-len */

import { Container } from 'react-bootstrap';

const LegalNotice = () => (
  <Container className="bg-white py-2 ">

    <section className="legalNotice px-3 py-3" aria-label="page des mentions légales">
      <h1
        style={{
          textAlign: 'center', paddingBottom: '2em', fontSize: 'xx-large', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="titre : mentions légales"
      >
        Mentions légales
      </h1>
      <h2
        style={{
          fontWeight: 'bold', fontSize: 'medium', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="url du site y a faim"
      >
        www.yafaim.fr
      </h2>
      <p style={{ marginTop: '3em' }}>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
        Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'"<strong>Utilisateur</strong>", du site www.yafaim.fr , ci-après le "Site", les présentes mentions
        légales.
      </p>
      <p>
        La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve
        des présentes mentions légales.
      </p>
      <p>Ces dernières sont accessibles sur le Site à la rubrique « <strong>Mentions légales</strong> ».</p>
      <h3
        style={{
          fontSize: 'x-large', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="les éditeurs"
      >
        Article 1 - Les éditeurs
      </h3>
      <p>
        L’édition et la direction de la publication du Site est assurée par la société MJAX dont l'adresse e-mail mjaxsociety@gmail.com.
      </p>
      <h3
        style={{
          fontSize: 'x-large', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="l'hebergeur du site"
      >
        Article 2 - L'hébergeur du site
      </h3>
      <p>L'hébergeur du Site est la société MJAX, dont l'adresse e-mail est mjaxsociety@gmail.com.
      </p>
      <h3
        style={{
          fontSize: 'x-large', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="accès au site"
      >
        ARTICLE 3 - Accès au site
      </h3>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
        programmée ou non et pouvant découler d’une nécessité de maintenance.
      </p>
      <p>En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
      <h3
        style={{
          fontSize: 'x-large', color: '#4a536b', marginBottom: '0.8em', marginTop: '1.4em',
        }}
        aria-label="collecte des données"
      >
        ARTICLE 4 - Collecte des données
      </h3>
      <p>Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect
        de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
        et aux libertés.
      </p>
      <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit
        d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur
        exerce ce droit par mail à l'adresse email mjaxsociety@gmail.com.
        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
        sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
      </p>
    </section>
  </Container>
);

export default LegalNotice;
