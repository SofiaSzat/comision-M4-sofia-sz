const GeorefRouter = require ('express').Router();
const { obtenerProv
} =require ('./../controllers/GeorefController');

GeorefRouter.get('/provincias', obtenerProv);



module.exports = GeorefRouter;