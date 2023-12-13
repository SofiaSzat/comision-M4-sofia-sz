import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


const FormLog = () => { 
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [deshabBoton, setDeshabBoton] = useState(false); 

    //eventos 
   const cambiarUsername = (e) => {
       setUsername(e.target.value);
    } 

    const cambiarPassword = (e) => {
      setPassword(e.target.value);
    }

    const HaceLogeo = () => {
      setDeshabBoton(true);
      console.log(username);
      console.log(password);
    }
        return (
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu usuario" onInput={cambiarUsername} />
            <Form.Text className="text-muted">
            
            </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" onInput={cambiarPassword} />
            </Form.Group>
            
                   
            <Button variant="outline-dark" onClick={HaceLogeo} disabled={deshabBoton}>Listo</Button>
            
        </Form>
        
        );
    };
  
//ESTE VA COMO <FORMLOG/> EN LOGIN.jsx

  export default FormLog;

