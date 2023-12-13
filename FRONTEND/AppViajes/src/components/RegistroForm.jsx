import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LoadingButton from './botonPRUEBA';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

    const FormularioRegistro = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [nombres, setNombres] = useState('');
        const [apellidos, setApellidos] = useState('');
        const [errores, setErrores] = useState({});
        const [deshabBoton, setDeshabBoton] = useState(false);


return (
    <>
<InputGroup className="mb-3">
<InputGroup.Text>Nombres y apellidos</InputGroup.Text>
<Form.Control aria-label="Nombres" /*onInput={editarNombres} *//>
<Form.Control aria-label="Apellidos"/*onInput={editarApellidos} *//>
</InputGroup>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Contraseña</Form.Label>
<Form.Control type="Contraseña" placeholder="Ingresa tu contraseña" /*onInput={editarPassword}*//>
</Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control placeholder="Username" aria-label="Username" /*onInput={editarUsername}*/
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <LoadingButton /*onClick={VerificacionData} disabled={deshabBoton}>*/></LoadingButton>
      </>
   
);
}

export default FormularioRegistro ;