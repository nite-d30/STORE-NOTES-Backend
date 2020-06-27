const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv/config');


const app=express();
app.use(bodyParser.json())
app.use(cors())


mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true},()=>console.log('connected'));


const notesroutes=require('./app/routes');
const userrouts=require('./app/user_routes');

app.use('/api',notesroutes);
app.use('/api/user',userrouts);


const port = 8000;
app.listen(port, () => {  console.log('server running on port ' + port);});