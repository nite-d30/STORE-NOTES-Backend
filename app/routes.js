const express = require('express');
const router = express.Router();
const authverify=require('./authverify');
const {getnotes,storenotes,updatenotes,deletenote}=require('../controllers/notes');


router.post('/getnotes',authverify,getnotes);
router.post('/storenotes',authverify,storenotes);
router.put('/updatenotes',authverify,updatenotes);
router.post('/deletenotes',authverify,deletenote)


module.exports = router;