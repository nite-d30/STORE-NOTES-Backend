const express = require('express');
const router = express.Router();
const authverify=require('./authverify');
const {getrooms,postrooms,updaterooms}=require('../controllers/rooms');
const {delegate}=require('../controllers/delgates')

router.get('/getrooms',authverify,getrooms);
router.post('/storerooms',authverify,postrooms);
router.put('/updaterooms',authverify,updaterooms);
router.get('/delegates',authverify,delegate);

module.exports = router;