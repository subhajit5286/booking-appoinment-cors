const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('booking',{
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  name : {type: Sequelize.STRING},
  email : {
    type : Sequelize.STRING,
    allowNull : false
  },
  phoneNumber :{
    type : Sequelize.STRING,
    allowNull : false
  }
})
module.exports = User;