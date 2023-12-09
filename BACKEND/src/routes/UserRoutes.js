const userRouter = require ('express').Router();
const { verUsuarios, verUser, crearUser, editarUser, eliminarUser } = require ('./../controllers/UserController.js');



//ver usuarios
userRouter.get('/usuarios', verUsuarios);

//ver usuario
userRouter.get ('/usuario', verUser);

//crear usuario
userRouter.post('/usuario', crearUser);

//editar usuario
userRouter.put('/usuario', editarUser);

//eliminar usuario
userRouter.delete('/usuario', eliminarUser);

module.exports = userRouter;