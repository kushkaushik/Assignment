const mongoose = require('mongoose'); // Erase if already required
const {ObjectId} = mongoose.Types
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    Score:{
        type:String,
        required:true,
    },
    getBy:{
        type:ObjectId,
        ref:"quizmyuser"
    },
   start:{
    type:String,
   },
   end:{
    type:String
   }
});

//Export the model
module.exports = mongoose.model('resultQuiz', userSchema);