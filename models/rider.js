const mongoose =require('mongoose');

const riderschema=  new mongoose.Schema({
    riderId:{
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
const Rider= mongoose.model('Rider', riderschema);
// now export this Task collection
module.exports=Rider;


