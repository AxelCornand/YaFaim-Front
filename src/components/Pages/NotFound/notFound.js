import { Image } from 'react-bootstrap';
import image from '../../../assets/img/404.png';

const NotFound = () => (

  <div style={{ display: 'flex', justifyContent: 'center' }} className="container" aria-label="page 404">
    <Image style={{ width: '55%' }} className="mt-5 mt-lg-0" alt="404" src={image} source="Image de storyset sur Freepik" fluid aria-label="image de la 404" />
  </div>

);

export default NotFound;
