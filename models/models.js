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

const checkbooking = mongoose.Schema({
    startdate:String,
    enddate:String
})

const userdetailModel=mongoose.model('users',userdeatilSchema)
const roomsModel=mongoose.model('rooms',roomsScheema)
const bookingmodel = mongoose.model('bookingdetails',checkbooking)
module.exports ={userdetailModel,roomsModel,bookingmodel};

