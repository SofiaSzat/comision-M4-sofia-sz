import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Posteo from '../components/Posteo';

const Inicio = () => {

  const [posteo, setPosteo] = useState([]);

  const cargarPost = async () => {
    //backend
    //traer datos
    //cargarlos
  }

  useEffect(()=> {
    cargarPost();
  }, []);

  return (
 
   <Card.Body ><Posteo posteo={posteo}  /></Card.Body>
       
    
  )
}

export default Inicio