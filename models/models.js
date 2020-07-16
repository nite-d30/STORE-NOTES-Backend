const mongoose=require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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


notesScheema.plugin(mongoosePaginate)

const userdetailModel=mongoose.model('users',userdeatilSchema)
const notesModel=mongoose.model('notes',notesScheema)
module.exports ={userdetailModel,notesModel};

