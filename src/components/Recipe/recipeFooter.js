/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import {
  TwitterShareButton, WhatsappShareButton, WhatsappIcon, TwitterIcon,
} from 'react-share';
import PropTypes from 'prop-types';

/* eslint-disable arrow-body-style */
const RecipeFooter = ({ slug }) => {
  return (
    <section
      aria-label="boutons des réseaux sociaux"
      style={{
        marginTop: '7em', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '0.9em', textShadow: '15px 15px 15px black', color: 'white' }}>Partagez la recette via vos réseaux sociaux</h1>
      <div style={{ marginTop: '0.5em' }}>

        <WhatsappShareButton
          style={{ margin: '1em' }}
          target="_blank"
          aria-label="Whatsapp"
          url={`http://localhost:8080/recipe/${slug}`}
          quote={"J'ai trouvé une recette sur Y a faim !"}
          hashtag="#recette"
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <TwitterShareButton
          style={{ margin: '1em' }}
          target="_blank"
          aria-label="Instagram"
          url={`http://localhost:8080/recipe/${slug}`}
          quote={"J'ai trouvé une recette sur Y a faim !"}
          hashtag="#recette"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

      </div>
    </section>
  );
};

RecipeFooter.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default RecipeFooter;
