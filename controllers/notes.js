const { notesModel} = require('../models/models')
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const jwtDecode = require('jwt-decode');

exports.getnotes = (req, res) => {
    const notes = notesModel.paginate({email:req.body['email']}, { page:req.body['pageNumber'], limit: req.body['pageSize'] })
    
    notes.then(data => {
        if (!data) {
            res.status(404).send({ status: false, message: 'No notes found' });
        } else {
            let filteredarr = [];
            data.docs.filter(el => {
                filteredarr.push(_.pick(el, ['uuid', 'title', 'email', 'content', 'action','createdTime','editedTime']))
            })
            res.status(200).send({ status: true,totalCount:data.total,notes: filteredarr })
           
        }

    }).catch(err => {
        res.status(400).send({ err: err })
    })
}

exports.storenotes = (req, res) => {
    let noteObj=req.body;
    noteObj['uuid']=uuidv4();
    noteObj['createdTime']=new Date().getTime();

    const addnotes = new notesModel(noteObj);
    addnotes.save().then(data => {
        if (data) {
            res.status(200).send({ status: true });
        }

    }).catch(err => {
        res.status(400).send(err);
    })
}

exports.updatenotes = (req, res) => {
    let noteObj=req.body;
    noteObj['editedTime']=new Date().getTime();   
    const updatenote=notesModel.findOneAndUpdate({uuid:req.body['uuid']},noteObj,{
        new :true
    })

    updatenote.then(data=>{
            res.status(200);
    }).catch(err=>{
        res.status(400).send(err);
    })
}

exports.deletenote=(req,res)=>{
     notesModel.deleteMany({uuid:{$in:req.body}}).then(data=>{
        if(data){
            res.send(data)
        }
    }).catch(err=>{
        res.status(404);
    })
}
