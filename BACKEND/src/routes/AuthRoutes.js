const AuthRoutes = require ('express').Router();

const {
    autenticar,
    registrar,
    verificar,
}= require ('./../controllers/AuthContoller');

AuthRoutes.post('/autenticar', autenticar);
AuthRoutes.post('/registrar', registrar);
AuthRoutes.post('/verificar', verificar);

module.exports = AuthRoutes;
