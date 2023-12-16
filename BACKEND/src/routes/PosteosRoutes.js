const posteosRouter = require ('express').Router();

userRouter.get('/posteos', verPosteos);

userRouter.post('/posteo', nuevoPost);

userRouter.put('/posteo', editarPost);

userRouter.delete('/posteo', eliminarPost);