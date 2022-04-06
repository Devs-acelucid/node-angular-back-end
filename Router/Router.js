const express = require("express");
const mailService = require("../Controller/mailService");
const Router = express.Router();
Router.post(`/mailService`, mailService.mailServiceFun);
module.exports = Router;
