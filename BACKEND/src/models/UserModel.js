const {Schema, model} = require ('mongoose');

const UserSchema = new Schema ({
    nombres: String,
    apellidos: String,
    username: String,
    password: String,
});

const UserModel = model('usuario', UserSchema);

module.exports = UserModel;