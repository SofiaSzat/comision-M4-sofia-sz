const userModel = require('./../models/UserModel.js');

const jwt = require('jsonwebtoken');
//importando libreria

const AuthController = {}

const JWT_KEY = process.env.JWT_KEY;

const usuarios =[
    {id: 1, usuario: 'Sergio', password: 'RB19',username: 'checo'},
    {id: 2, usuario: 'Lando', password: 'MCL60', username: 'LN4'},
 ];

 //LOGEO
AuthController.autenticar = async (req,res) => {
try {
    const {username, password } = req.body;
    const encontrado = await userModel.findOne( {where:{ username, password }} )

    if (!encontrado) {
        return  res.status(404).json({mensaje:'No se puede encontrar el usuario...'});
    }
    const datos = {
        id: encontrado._id,
        username: encontrado.username,
        nombres: encontrado.nombres,            //NO SE SI DEJAR EL NOMBRE Y APELLIDO PARA BUSCARLO. 
        apellidos: encontrado.apellidos,
    }

    let token = jwt.sign(datos, JWT_KEY); //esto me devolvia el error INVALID SIGNATURE, faltaba el JWT_KEY
                    //metodo sign

    res.json({token:  token, datos}); //responder
}catch(error){
    return res.status(500).json({ mensaje: 'Hubo un error en el servidor!'})

}
}
//FALTA MAS ACA//
AuthController.registrar = (req,res) =>{
    const newuser= req.body.newuser;

//Quiero que busque por username tmab, compruebe si existe o no y en caso de que no, lo cree correctament.
//sino no se 
    let token = jwt.sign({ user:user}, JWT_KEY);

    res.json({token:token});

}

AuthController.verificar = (req,res) => {
    const token = req.body.token;

    //console.log(token);
try{
    let desencriptado = jwt.verify(token, JWT_KEY);
    
    res.json({ datos: desencriptado });
}catch (error){
    res.status(500).json({
        mensaje: 'Hubo un error!',
        error: error,
    });
}
}









module.exports = AuthController;