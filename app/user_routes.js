const express = require('express');
const router = express.Router();
const {userauth,userregister}=require('../controllers/user_authentication')


router.post('/login',userauth);
router.post('/register',userregister)




module.exports=router;
