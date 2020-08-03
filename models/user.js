const mongoose =require('mongoose');

const userschema=  new mongoose.Schema({
    userId:{
        type:Number,
        unique:true,
    },
   totalsum:{
       type:Number,
   },
   ridecount:{
      type:Number,
   }, 
   average:{
       type:Number
   }
},{
    timestamps:true
});
//   creating the User (the name of collection of userschema)
const User= mongoose.model('User', userschema);
// now export this User collection
module.exports=User;


