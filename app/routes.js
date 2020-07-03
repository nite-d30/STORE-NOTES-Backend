const express = require('express');
const router = express.Router();
const authverify=require('./authverify');
const {getnotes,storenotes,updatenotes}=require('../controllers/notes');


router.get('/getnotes',authverify,getnotes);
router.post('/storenotes',authverify,storenotes);
router.put('/updatenotes',authverify,updatenotes);



module.exports = router;