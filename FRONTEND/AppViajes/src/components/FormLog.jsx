import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import {guardar , obtener, guardarToken, obtenerToken} from './../utils/login';


//FORMULARIO DE LOGIN FUNCIONA COMO REGISTRO JJAJAJ

const FormLog = () => { 
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [errores, setErrores] = useState({});
    const [deshabBoton, setDeshabBoton] = useState(false); 

    const navigate = useNavigate();

    //eventos 
   const ingresarUsername = (e) => {
       setUsername(e.target.value);
    } 

    const ingresarPassword = (e) => {
      setPassword(e.target.value);
    }






    //ERRORES
    const VerificacionData = async () => {
      let errores ={}

      if (username.length === 0){
          errores.username = 'Ingresa tu nombre de usuario'
      }
      if (password.length === 0){
          errores.password = 'Ingresa tu contraseña'
      }

      setErrores(errores); 

      if (Object.entries(errores).length === 0){
          setDeshabBoton(true);

          await ingresar();
      }
    }


    const ingresar = async () =>{
      const url ='http://localhost:3000/autenticar';
  
      const datos = {
          username: username,
          password: password
      }


try{
      const respuesta = await axios.post(url, datos);

      if (respuesta.status === 200) {
         // navigate ('/');

         const { datos, token }= respuesta.data;
         guardar(datos);
         guardarToken(token);

         const datosGuardados = obtener();
         const tokenGuardado = obtenerToken();

         console.log(datosGuardados)
         console.log(tokenGuardado)
         //FUNCIONA
    } else {
        setErrores({error: 'Hubo un error!'});
    } 
    }catch(error) {
        
  setErrores({error: 'El usuario o contraseña no son validos.'});
}

setDeshabBoton(false);

    }
        return (
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu usuario" onInput={ingresarUsername} />
                      {errores.username && (<Alert variant='warning'>{errores.username}</Alert>)}
            <Form.Text className="text-muted">
            
            </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" onInput={ingresarPassword} />
                      {errores.password && (<Alert variant='warning'>{errores.password}</Alert>)}
            </Form.Group>
            
            {errores.error && (<Alert variant='warning'>{errores.error}</Alert>)}
                   
            <Button variant="outline-dark" onClick={VerificacionData} disabled={deshabBoton}>Listo</Button>
            
        </Form>
        
        );
    };
  
//ESTE VA COMO <FORMLOG/> EN LOGIN.jsx

  export default FormLog;

