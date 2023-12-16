const userModel = require('./../models/UserModel.js');

const jwt = require('jsonwebtoken');
//importando libreria

const AuthController = {}

const JWT_KEY = process.env.JWT_KEY;

/*const usuarios =[
    {id: 1, usuario: 'Sergio', password: 'RB19',username: 'checo'},
    {id: 2, usuario: 'Lando', password: 'MCL60', username: 'LN4'},
 ];*/



//PARA EL LOGIN
//Tiraba error body no definido. Ya funciona.
AuthController.autenticar = async (req,res) => {
try {
    const {username, password } = req.body;

    const encontrado = await userModel.findOne( {  username: username, password: password } )

    if (!encontrado) {
        return  res.status(404).json({ mensaje:'No se puede encontrar el usuario...'});
    } 

    const datos = {
        id: encontrado._id,
        username: encontrado.username,
        nombres: encontrado.nombres,
        apellidos: encontrado.apellidos,
    }

    let token = jwt.sign(datos, JWT_KEY, {expiresIn: '2 days'}); //esto me devolvia el error INVALID SIGNATURE, faltaba el JWT_KEY
                    //metodo sign
    res.json({token:  token, datos: datos});
}catch(error){
    console.log(error)
    return res.status(500).json({ mensaje: 'Hubo un error en el servidor!'})

}
}
//ESTO PARA EL REGISTRO 
AuthController.registrar = async (req,res) => {
    //const newuser= req.body.newuser;
    console.log(req.body);

    //Quiero que busque por username tmab, compruebe si existe o no y en caso de que no, lo cree correctament.

    const {nombres,apellidos,username,password} = req.body;
    try{
        const buscar = await userModel.findOne({nombres:nombres, username: username});
        res.json(buscar); 
        if(buscar){
            throw new Error ('Ya estas registrado!');
           
        }
   
   
    }catch(error){
        res.status(500).json({
            mensaje: 'Hubo un error!',
            error: error,})

    }

   

};

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