import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

    const FormularioRegistro = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [nombres, setNombres] = useState('');
        const [apellidos, setApellidos] = useState('');
        const [errores, setErrores] = useState({});
        const [deshabBoton, setDeshabBoton] = useState(false);


        const navigate = useNavigate();

        const registrarNombres =(e) => {
            setNombres(e.target.value);
        }
        const registrarApellidos =(e) => {
            setApellidos(e.target.value);
        }
        const registrarUsername = (e) => {
            setUsername(e.target.value);
        }
        const registrarPassword = (e) =>{
            setPassword(e.target.value);
        }
///FUNCIONA. Lo ideal seria crear una alerta tambien. -> HECHO
        const VerificacionData = async () => {
            let errores ={}

            if (username.length === 0){
                errores.nombres = 'Ingrese un nombre'
            }
            if (username.length === 0){
                errores.apellidos = 'Ingrese un apellido'
            }
            if (username.length === 0){
                errores.username = 'Crea un nombre de usuario'
            }
            if (password.length === 0){
                errores.password = 'Crea una contraseña'
            }
           

            setErrores(errores); 

            if (Object.entries(errores).length === 0){
                setDeshabBoton(true);

                await registrar();
            }
        }

        const registrar = async () =>{
            const url ='http://localhost:3000/usuario';
        
            const datos = {
                nombres: nombres,
                apellidos : apellidos,
                username: username,
                password: password
            }
            
           
            try{
            const respuesta = await axios.post(url, datos);

            if (respuesta.status === 200) {
                return navigate ('/');
            } else {
                setErrores({error: 'Hubo un error!'});
            } 
        }catch (error) {
            setErrores({error: 'Hubo un error!'});        
        }
        setDeshabBoton(false);
            }
            return (
                <>
    <InputGroup className="mb-3">
          <InputGroup.Text>Nombres y apellidos</InputGroup.Text>
          <Form.Control aria-label="Nombres" placeholder="Ingresa tu nombre" onInput={registrarNombres} />
                        

          <Form.Control aria-label="Apellidos" placeholder="Ingresa tu apellido" onInput={registrarApellidos} />
         
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" onInput={registrarPassword}/>
          </Form.Group>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control placeholder="Username" aria-label="Username" onInput={registrarUsername}
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button variant="outline-dark" onClick={VerificacionData} disabled={deshabBoton}>Listo</Button>
                 
                            {errores.nombres && (<Alert variant='warning'>{errores.nombres}</Alert>)}
                            {errores.apellidos && (<Alert variant='warning'>{errores.apellidos}</Alert>)}
                            {errores.password && (<Alert variant='warning'>{errores.password}</Alert>)}
                            {errores.username && (<Alert variant='warning'>{errores.username}</Alert>)}
                        
                  </>
               
            );
            }

export default FormularioRegistro ;