const mongoose=require('mongoose');


const userdeatilSchema=mongoose.Schema({
    username:String,
    email:String,
    phonenumber:Number,
    password:String,
    confirmpassword:String
})

const notesScheema=mongoose.Schema({
    uuid:String,
    title:String,
    content:String,
    email:String,
    action:String,
    createdTime:Date,
    editedTime:Date
})




const userdetailModel=mongoose.model('users',userdeatilSchema)
const notesModel=mongoose.model('notes',notesScheema)
module.exports ={userdetailModel,notesModel};

