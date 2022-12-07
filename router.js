const express = require("express");
const MenRanking=require("./model");
const router= new express.Router();


router.post("/ranks", async (req,res)=>{
    try{

        // console.log("hello how r u");
        const user=new MenRanking(req.body);
        const userData = await user.save();
        res.status(201).send(userData);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/", (req, res)=>{
    res.send("<h1>hello world</h1>")
})

router.get("/ranks", async (req,res)=>{
    try{
    const studentsData=await MenRanking.find().sort({rank:1});
    res.status(200).send(studentsData);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/ranks/:id", async (req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await MenRanking.findById(_id);
        res.status(200).send(studentData);
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch("/ranks/:id", async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateData=await MenRanking.findByIdAndUpdate(_id , req.body, {new:true});
        res.status(200).send(updateData);
    }catch(err){
        res.status(400).send(err);
    }
});

router.delete("/ranks/:id", async (req,res)=>{
    try{
        const _id=req.params.id;
        const deleteData=await MenRanking.findByIdAndDelete(_id);
        res.status(200).send(deleteData);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;