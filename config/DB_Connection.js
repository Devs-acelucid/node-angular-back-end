const sequelize = require("sequelize");
const connection = new sequelize({
    username: "root",
    password: "ChandanAL",
    dialect: 'mysql',
    database: "sequelize_tutorial"
})

module.exports = connection