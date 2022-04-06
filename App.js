require("dotenv").config();
const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const Router = require("./Router/Router");
// const DB_Connection =  require("./config/DB_Connection")
const PORT_NO = process.env.PORT_NO;
const API_URL  = process.env.API_URL
const App = express();
App.use(bodyParser.json());
 App.use(cors())

App.use((req,res,next)=>{
  res.setHeader('Acces-Control-Allow-Origin','yes');
  res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
  next(); 
})
App.use(`/${API_URL}/`, Router);

// DB_Connection.authenticate()
// .then((data)=>{
//   console.log("DataBase connection is success")
// })
// .catch(err=>{
//   console.log(err)
// })
App.listen(PORT_NO, ()=>{
    console.log(`server is runnig at http://localhost:${PORT_NO}/`)
})