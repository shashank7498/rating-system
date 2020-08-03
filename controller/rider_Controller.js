// import user and rider from the database
const User=require('../models/user')
const Rider=require('../models/rider')

module.exports.riderPage=function(req, res){
   
    return  res.render('riderView',{
         title:"Rider"
     });
 };
 //  module.exports.actionname=funtion(req,res){};   
 
 module.exports.riderRating=function(req, res){
    const id = req.query.id;
    const id2= req.query.id1;
    console.log(req.query);
    const value=req.body.quantity;
    var query = { userId: id };
    let Avg;
    let riderAvg;
    User.findOne({userId:id2},function(err, rider){
        if(err){
            return console.log("error in finding riderId");
        }
        console.log(rider);
        riderAvg=rider.average;
    })
    User.findOne(query,function(err,user){
        if(err){
             console.log('error in updating the rating of user');
             return ;
        }
         if(!user){
            User.create({
                userId:id,
                totalsum:value,
                ridecount:1,
                average:value
             })
             return res.redirect('/');
         }else{
              let newrating=parseInt(user.totalsum)+parseInt(value);
              let newcount=parseInt(user.ridecount)+1;
              Avg= (newrating / newcount); 
              User.updateOne(query, {
                $set: {
                    userId:id,
                    totalsum:newrating,
                    ridecount:newcount,
                    average:Avg  
         }
            }, (err, result) => {
             if (err) return res.send(err);
             return res.render('rider_homeView.ejs',{
                average:riderAvg
            })
            //  return res.redirect('/');
            //  console.log("Successfully Updated!");
            })
           
         }
     });
 }