import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Loading = () => (
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} aria-label="Loading">
    <h1 className="text-center" style={{ color: 'white', fontFamily: 'NexaBold', textShadow: '15px 15px 15px black' }}>Un instant, ça chauffe...</h1>
    <Button style={{ maxWidth: '3em', marginTop: '1em' }} variant="navyblue" disabled aria-label="bouton du loading">
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        aria-label="Loading"
      />
      <span className="visually-hidden">Loading...</span>
    </Button>
  </div>
);

export default Loading;
