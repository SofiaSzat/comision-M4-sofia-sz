const axios = require('axios');

const GeorefController = {}

GeorefController.obtenerProv = async (req,res) => {
    const url = 'https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json'

    const respuesta = await axios.get(url);

    //console.log(respuesta.data);
    return res.json({...respuesta.data });
}


module.exports = GeorefController;