const {Schema, model, default: mongoose}= require('mongoose');

const PostSchema= new Schema({
    title: String, 
    text: String, 
    author:{ type: String
        //type:mongoose.types.ObjectId
    },
    timestamps: true, //no se si es correcto. para agregar fecha  
    
});

const PostModel = model('post', PostSchema);

module.exports= PostModel;