import mongoose from "mongoose";

const userShcema =new mongoose.Schema({
firstName:{
    type:String,
    required:true,
    trim:true,
    max:20
},
lastName:{
    type:String,
    required:true,
    trim:true,
    max:20
},
email:{
    type:String,
    required:true,
    trim:true,
   
},
password:{
    type:String,
    required:true,
    trim:true,
    max:20
},
number:{
    type:String,
    required:true,
    trim:true,
    min:10,
    max:10,
    unique:true
}

})
const user=mongoose.model('user',userShcema)
export default user