import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const PostForm= () => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');

    const [posteo, setPosteo] = useState([]);

    const crearTitulo = (e) => {
        setTitulo(e.target.value);
    }
    const crearTexto =(e) => {
        setTexto(e.target.value);
    }

    const hacerPosteo = () => {
        console.log(titulo);
        console.log(texto);
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>A donde fuiste?</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Titulo" onInput={crearTitulo} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Como estuvo tu viaje?</Form.Label>
        <Form.Control as="textarea" rows={3} onInput={crearTexto} />
      </Form.Group>
      <Button variant="outline-dark" onClick={hacerPosteo} /*disabled={deshabBoton}*/ >Listo</Button>
    </Form>
  );
}

export default PostForm;