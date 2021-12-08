const sequelize= require('./index')
const {DataTypes}= require('sequelize')

const Admin = sequelize.define('Admin', {
    _amind_ID:{
        type: DataTypes.INTEGER,
        allowNull: false, primaryKey: true
    },
    _user_ID:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
,{
    tableName: 'Admin',
    timestamps: false
});
  
  module.exports=Admin