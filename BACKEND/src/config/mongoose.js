const mongoose= require ('mongoose');

const MONGO_DB_URI= process.env.MONGO_DB_URI;

const conectarMongoDB = async ()=>{
    try{
        await mongoose.connect(MONGO_DB_URI);
        console.log('Conectado!')
    }catch(error){
        console.log('error: ', error);
    }
    
}

module.exports= conectarMongoDB;