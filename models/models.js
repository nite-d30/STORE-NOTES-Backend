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
    price:Number,
    table:String
})

const checkbooking = mongoose.Schema({
    startdate:String,
    enddate:String
})

const delegateSchema=mongoose.Schema({
    email:String,
    username:String,
    contact:Number
})

const userdetailModel=mongoose.model('users',userdeatilSchema)
const roomsModel=mongoose.model('rooms',roomsScheema)
const bookingmodel = mongoose.model('bookingdetails',checkbooking)
const delegateModel=mongoose.model('delgates',delegateSchema)
module.exports ={userdetailModel,roomsModel,bookingmodel,delegateModel};

