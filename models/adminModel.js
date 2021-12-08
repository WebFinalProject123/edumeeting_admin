const sequelize= require('./index')
const {DataTypes}= require('sequelize')

const Admin = sequelize.define('Admin', {
    _Admin_ID:{
        type: DataTypes.INTEGER,
        allowNull: false, primaryKey: true
    },
    _User_ID:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
  
  module.exports=Admin