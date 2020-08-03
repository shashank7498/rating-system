// import user and rider from the database
const User=require('../models/user')
const Rider=require('../models/rider')

module.exports.userPage=function(req, res){
   
    return  res.render('userView',{
         title:"User"
     });
 };
 //  module.exports.actionname=funtion(req,res){};   
 
 module.exports.userRating=function(req, res){
    const id = req.query.id;
    const id2= req.query.id1;
    console.log(req.query);
    const value=req.body.quantity;
    var query = { riderId: id };
    let Avg;
    let userAvg;
    User.findOne({userId:id2},function(err, user){
        if(err){
            return console.log("error in finding userId");
        }
        console.log(user);
        userAvg=user.average;
    })
     Rider.findOne(query,function(err,rider){
        if(err){
             console.log('error in updating the rating of user');
             return ;
        }
         if(!rider){
             Rider.create({
                riderId:id,
                totalsum:value,
                ridecount:1,
                average:value
             })
             return res.redirect('/');
         }else{
              let newrating=parseInt(rider.totalsum)+parseInt(value);
              let newcount=parseInt(rider.ridecount)+1;
              Avg= (newrating / newcount); 
            Rider.updateOne(query, {
                $set: {
                    riderId:id,
                    totalsum:newrating,
                    ridecount:newcount,
                    average:Avg  
         }
            }, (err, result) => {
             if (err) return res.send(err);
             return res.render('user_homeView.ejs',{
                 average:userAvg
             })
            //  return res.redirect('/');
            //  console.log("Successfully Updated!");
            })
           
         }
     });
 }