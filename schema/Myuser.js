const mongoose = require('mongoose'); // Erase if already required
const {ObjectId} = mongoose.Types
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    

});


module.exports = mongoose.model('quizmyuser', userSchema);