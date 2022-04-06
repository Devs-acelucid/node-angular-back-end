const { DataTypes} = require("sequelize");
const DB_Connection =  require("../config/DB_Connection")

const RecipientModel = DB_Connection.define("recipientdetails", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timestamps:false
});

module.exports = RecipientModel
