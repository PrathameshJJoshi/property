const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const project = db.define('tbl_project', {

  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  contact_person: {
    type: Sequelize.STRING
  },
  contact_number: {
    type: Sequelize.STRING
  },
  status: {
    type:   Sequelize.ENUM,
    values: ['InProcess','Inactive','Completed']
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


project.sync().then(() => {
  console.log('table created');
});
module.exports = project;
