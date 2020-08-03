const express= require('express');
const router= express.Router();
 const userController= require('../controller/user_Controller');

router.get('/', userController.userPage);
router.post('/updateRating',userController.userRating);
 // for any further routes 

module.exports=router;