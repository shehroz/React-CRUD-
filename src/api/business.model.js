const mongoose=require('mongoose');
const schema=mongoose.Schema;

let Business = new Schema({
    person_name:{
        type:String
    },
    business_name:{
        type:String
    },
    gct_number:{
        type:Number
    }
},
 { collection:'business'
});

module.exports=mongoose.model('Business',Business);