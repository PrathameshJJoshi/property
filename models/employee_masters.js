const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const employee_masters = db.define('tbl_employee_masters', {

  employee_code: {
    type: Sequelize.STRING
  },
  employee_firstname: {
    type: Sequelize.STRING
  },
  employee_lastname: {
    type: Sequelize.STRING
  },
  birth_date: {
    type: Sequelize.DATE
  },
  mobile: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  created_by: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updated_by: {
    type: Sequelize.INTEGER
  },
  updatedAt: {
    type: Sequelize.JSON
  },
});

// user.pre('save',function(next){
//   const use = this; 
//   if(!use.isModified('password')){
//       return next()
//   }
//   const hash=base.encode(use.password)
//        use.password = hash;
//        next()
//    });


employee_masters.sync().then(() => {
  console.log('table created');
});
module.exports = employee_masters;
