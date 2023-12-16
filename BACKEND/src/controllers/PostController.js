const PostModel= require ('./../models/PosteosModel.js');

const postController={}
//ver posteos
postController.verPosteos= async (req,res) =>{
    try{
        const posteos = await PostModel.find();

        return res.json(posteos);
    }catch(error){
        return res.status(500).json({
            mensaje: 'hubo un error', error: error
        });
    }
}
//crear posteo
postController.nuevoPost = async (req,res) =>{
    try{
        const {titulo,texto,author} =req.body;

        const newPost = new PostModel({
            titulo: titulo,
            texto: texto,
            author: author,
        });
        await newPost.save();
        return res.json({mensaje: 'Creaste un nuevo posteo!'});
    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error al crear el posteo', error:error
        });
    }
}

//editar posteo
postController.editarPost= async (req,res) => {
    try{
        const {titulo, texto} = req.body;

        await PostModel.findByIdAndUpdate( 
            id,
        {titulo: titulo,
        texto: texto,
        });
        return res.json ({mensaje:'El posteo se edito correctamente'});

    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
   
}
//eliminar posteo
postController.eliminarPost= async (req,res) => {
    try{

        const { id } = req.body;

        await PostModel.findByIdAndDelte (id);

        return res.json ({mensaje:'Se elimino correctamente'});
    }catch(error){
        return res.status(500).json({
            mensaje: 'Hubo un error en el servidor', error:errror
        });
    }
    

}

