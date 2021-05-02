const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const expense_masters = db.define('tbl_expense_masters', {

  site_id: {
    type: Sequelize.INTEGER
  },
  site_name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM("Advance","Expense")
  },
  advance_from: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.DECIMAL
  },
  remarks: {
    type: Sequelize.TEXT
  },
  date: {
    type: Sequelize.DATEONLY
  },
  status: {
    type: Sequelize.ENUM('Pending','Approved','Completed','Cancelled')
  },
  employee_id: {
    type: Sequelize.STRING
  },
  employee_name: {
    type: Sequelize.STRING
  },
  file: {
    type: Sequelize.TEXT
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


expense_masters.sync().then(() => {
  console.log('table created');
});
module.exports = expense_masters;
