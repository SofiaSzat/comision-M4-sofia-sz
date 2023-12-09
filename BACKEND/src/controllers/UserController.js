const UserModel= require ('../models/UserModel.js')
const userControl = {}

/*const listado = [
    { nombre: 'Checo'},
    { nombre: 'Max' }

];
//funciona y se puede ver el listado OK*/

//ver usuarios
userControl.verUsuarios =  async (req, res) => {
    try{
        const listado = await UserModel.find();
        
        return res.json(listado); 
} catch(error){
    return res.status(500).json({
        mensaje:'Hubo un error en el servidor', error: error
    });
    }
}
 
//ver usuario
userControl.verUser = async(req,res) => {
    try{
        const {id}= req.params;
        const encontrado = await UserModel.findById(id);

        return res.json ({encontrado});
    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
    
}
//crear usuario
userControl.crearUser= async (req,res) => {
    try{
        const {nombres,apellidos,username,password} = req.body;
        
        const newUser = new UserModel({
            nombres: nombres,
            apellidos: apellidos,
            username: username,
            password: password,
        });
        await newUser.save();
        return res.json ({mensaje:'El usuario se creo correctamente'});
    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
    
}
//editar usuario
//OTRA FORMA DE ENCONTRAR AL USUARIO??
userControl.editarUser= async (req,res) => {
    try{
        const {nombres, apellidos, username, id} = req.body;

        await UserModel.findByIdAndUpdate(
            id,
            {nombres:nombres,
            apellidos: apellidos,
            username: username,
            }
        );
        return res.json ({mensaje:'Se edito correctamente'});

    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
   
}
//eliminar usuario
userControl.eliminarUser= async (req,res) => {
    try{

        const { id } = req.body;

        await UserModel.findByIdAndDelte (id);

        return res.json ({mensaje:'Se elimino correctamente'});
    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
    

}



module.exports = userControl;