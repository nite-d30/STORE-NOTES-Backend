const express = require('express');
const router = express.Router();
const authverify=require('./authverify');
const {getrooms,postrooms,updaterooms,roomavailability}=require('../controllers/rooms');


router.get('/getrooms',authverify,getrooms);
router.post('/storerooms',authverify,postrooms);
router.put('/updaterooms',authverify,updaterooms);
router.post('/roomavailability',authverify,roomavailability);


module.exports = router;