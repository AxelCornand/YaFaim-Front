/* eslint-disable max-len */
const WelcomeMessage = () => (
  <section
    className="my-3 px-3 bg-meerschaum py-4 fs-6 rounded text-navyblue"
    aria-label="Message de bienvenue"
  >
    <h2 className="mb-1 text-center p-2" aria-label="Bienvenue sur Y a faim"><strong>Bienvenue sur Y'a faim</strong> </h2>
    <p className="text-center">
      &#9829; &#9829; &#9829;
    </p>
    <p className="text-center">
      Retrouvez toutes les recettes de cuisine dont vous aurez besoin pour ravir vos papilles.
    </p>
    <p className="text-center">
      Dîtes <strong>non au gâchis</strong> grâce à notre fonctionnalité disponible pour tous nos utilisateurs connectés.
    </p>
    <p className="text-center">
      Vous pourrez ainsi générer une recherche pour découvrir les recettes de cuisine avec uniquement <strong>les ingrédients que contiennent votre frigo et vos placards</strong>.
    </p>
  </section>
);

export default WelcomeMessage;
