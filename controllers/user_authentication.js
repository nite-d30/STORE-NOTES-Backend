
const { userdetailModel } = require('../models/models')
const jwt = require('jsonwebtoken');

exports.userauth = (req, res) => {
    const user = userdetailModel.findOne({ email: req.body['email'], password: req.body['password'] })
    user.then(data => {
        if (data != null) {
            res.status(200).send({ 'token': jwt.sign({ _id: data._id, username: data.email }, process.env.TOKEN_SECREATE, { expiresIn: '10m' }) })
        } else {
            res.status(404).send('username or password is invalid');
        }
    }).catch(err => {
        res.status(400).send(err)
    });

}

exports.userregister = (req, res) => {
 
    const usereg = userdetailModel.findOne({ email: req.body['email']})

    usereg.then(data => {
        console.log(data)
        if (data == null) {
            const userdetail=new userdetailModel(req.body);
            userdetail.save().then(data=>{
                if (data != null) {
                    res.status(200).send({ status :true})
                }
            }).catch(err=>{
                res.status(400)
            })
        } else {
            res.send({ status: false, msg: 'user already exist' })
        }
    }).catch(err => {
        res.status(400)
    })

}