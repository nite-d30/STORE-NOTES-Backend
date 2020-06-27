const { delegateModel } = require('../models/models')
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const jwtDecode = require('jwt-decode');



exports.delegate = (req, res) => {
    
  var delegates = delegateModel.find({email:req.query['email']})
    
    delegates.then(data => {
    
        if(data){
            let filteredarr = [];
            data.forEach(el => {
                filteredarr.push(_.pick(el, ['username', 'contact']))
            })
            res.send(filteredarr);
        }else{
            res.send([])
        }
        
    }).catch(err => {
        res.status(400);
    })
}