const express = require("express");
const app = express();
const  MenRanking = require("./model");
const router = require("./router");
require("./conn");

const port=process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log("web set at port no." + port);
});