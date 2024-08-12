const express = require('express');
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./account");
 
router.get('/', function (req, res, next) {
    console.log("Router Working");
    res.end();
})
 
router.use("/user",userRouter);
router.use("/account", accountRouter);

 
module.exports=router;