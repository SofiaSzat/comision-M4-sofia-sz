import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Posteo = (props) => {
    const { posteo } = props;

  return (
    <Card>
      <Card.Header>Titulo</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Este es el texto de mi posteo.{' '}
          </p>
          <footer className="blockquote-footer">
            Autor.
          </footer>
        </blockquote>
        {
            posteo.map((item, key )=>{
                //Aca va el cuerpo del posteo...
            })
        };
      </Card.Body>
    </Card>
  );
}

export default Posteo;