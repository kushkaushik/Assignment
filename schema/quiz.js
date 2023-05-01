const mongoose = require('mongoose'); // Erase if already required
const {ObjectId} = mongoose.Types
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
   
    

    optionsQuiz:[{
        questionNo:{
            type:Number
        },
        question:{
            type:String,
            required:true,
        },
       option:{
        type:Object
       },
       
    }],
    answer:{
        type:Object
    },
    startDate:{
       type:String
      
    },
    endDate:{
        type:String
    },
    getActiveQuiz:{
        type:Boolean,
        default:false
    },
    postedBy:{
        type:ObjectId,
        ref:"quizmyuser"
    }
    
});

//Export the model
module.exports = mongoose.model('techQuz', userSchema);