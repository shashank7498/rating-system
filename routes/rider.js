const express= require('express');
const router= express.Router();
 const riderController= require('../controller/rider_Controller');

router.get('/', riderController.riderPage);
router.post('/updateRating',riderController.riderRating);
 // for any further routes 

module.exports=router;