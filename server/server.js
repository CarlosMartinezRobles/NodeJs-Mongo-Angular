//express
const express = require("express");
//mongoose
const mongoose = require('mongoose');
//cors
const cors = require('cors');
//body-parser
const bodyParser = require('body-parser');
//morgan
const logger=require("morgan");
//database
const{connect}= require("./api/utils/database/connect");
 //error
 const HTTPSTATUSCODE= require ("./api/utils/httpStatusCode");   
 //port to use server
PORT=3000 || 4000;

//use express
 const api= express();

 //to use database with server
 connect();

// express configutration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
// to indicate routes to use
app.use('/public', express.static('public'));

app.use('/api', api)

//use morgan
 api.use(logger("dev"));

//error control
api.use((_req,_res,next)=>{
    let err= new Error;
    err.status = 404;
    err.message= HTTPSTATUSCODE[404];
    next(err);
});
api.use((err, req,res,next)=>{
    return res.status(err.status||500).json(err.message||"unexpected error");
});

 

api.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
