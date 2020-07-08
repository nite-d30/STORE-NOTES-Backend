const { notesModel} = require('../models/models')
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const jwtDecode = require('jwt-decode');

exports.getnotes = (req, res) => {


    const notes = notesModel.find({email:req.query['email']})
    notes.then(data => {
        if (!data) {
            res.status(404).send({ status: false, message: 'No notes found' });
        } else {
            let filteredarr = [];
            data.filter(el => {
                filteredarr.push(_.pick(el, ['uuid', 'title', 'email', 'content', 'action','createdTime','editedTime']))
            })

            res.status(200).send({ status: true, notes: filteredarr })
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

