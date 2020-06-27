const {roomsModel}=require('../models/models')
const _= require('lodash');
const { v4: uuidv4 } = require('uuid');

exports.getrooms=(req,res)=>{
  const user=req.headers['authorization'].split(' ')[1];
  console.log(user)
const roomsdetail=roomsModel.find({email:user})
        roomsModel.then(data=>{
            if(!data){
                res.status(404).send({status:false,message:'No rooms found'});
            }else{
                 let filteredarr=[];
                 data.filter(el=>{
                       
                      filteredarr.push(_.pick(el,['uuid','roomName','seatsoccupied','projector','internet','price']))
                    })
            
                res.status(200).send({status:true,rooms:filteredarr})
            }
            
        }).catch(err=>{
            res.status(400).send({err:err})
        })
}

exports.postrooms=(req,res)=>{
    // let noteObj=req.body;
    // noteObj['createdTime']=new Date().getTime();
    
    // if(!noteObj['uuid'])
    //     noteObj['uuid']=uuidv4();
    
        
    // const notes=new notesmodel(noteObj); 
    // notes.save().then(data=>{
    //     if(data){
    //         res.status(200);
    //     }
        
    // }).catch(err=>{
    //     res.status(400).send(err);
    // })
}

exports.updaterooms=(req,res)=>{
    // let noteObj=req.body;
    // noteObj['editedTime']=new Date().getTime();   
    // const updatenote=notesmodel.findOneAndUpdate({uuid:req.body['uuid']},noteObj,{
    //     new :true
    // })

    // updatenote.then(data=>{
    //         res.status(200);
    // }).catch(err=>{
    //     res.status(400).send(err);
    // })
}