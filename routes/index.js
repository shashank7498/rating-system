const express= require('express');
const router= express.Router();
const  riderController=require('../controller/rider_Controller');



console.log("router is loaded");
// calling the action user  from the home_Controller.js using the route homeController
router.get('/',function(req, res){
    return  res.render('home',{
        title:"Home"
    });
});

router.use('/rider',require('./rider'));
router.use('/user',require('./user'));
 // for any further routes, use here
 // router.use('routername'.require('./routerfile));


module.exports=router;