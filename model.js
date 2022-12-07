const mongoose=require("mongoose");

const menSchema=new mongoose.Schema({
    rank:Number,
    score:Number,
    name:String,
    dob:String,
    nationality:String,
    event:{
        type:String,
        default:"100m"
    }
});

const MenRanking = new mongoose.model("MenRanking",menSchema);
module.exports= MenRanking;