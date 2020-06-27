const mongoose=require('mongoose');


const userdeatilSchema=mongoose.Schema({
    username:String,
    email:String,
    phonenumber:Number,
    password:String,
    confirmpassword:String
})

const roomsScheema=mongoose.Schema({
    uuid:String,
    roomName:String,
    seatsoccupied:Number,
    projector:String,
    internet:String,
    price:Number
})

const delegateSchema=mongoose.Schema({
    email:String,
    username:String,
    contact:Number
})

const delegateModel=mongoose.model('delgates',delegateSchema)
const userdetailModel=mongoose.model('users',userdeatilSchema)
const roomsModel=mongoose.model('rooms',roomsScheema)

module.exports ={userdetailModel,roomsModel,delegateModel};

