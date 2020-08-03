const express= require('express');
const path= require('path');
const db=require('./config/mongoose');

 // start the express app
 const app= express();
 // set the port number 8000 for our express server
 const port =8000;
 app.use(express.urlencoded({ extended: true }));
  // set-up the view engine
  app.set('view engine','ejs');
  // app.set('views', path.join(__dirname,'views'));
  app.set('views','views');
// this will take you the index.js in routes
 app.use('/', require('./routes/index'));


  app.listen(port,function(err){
    if(err){
        console.log(`Error in runnig the server:${err}`);
    }
    console.log(`Server is running on port:${port}`);
})