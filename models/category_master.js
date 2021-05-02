const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const category_master = db.define('tbl_category_master', {

  category_name: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  parent_id: {
    type: Sequelize.STRING
  },
  status: {
    type:   Sequelize.ENUM,
    values: ['active', 'inactive', 'deleted']
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


category_master.sync().then(() => {
  console.log('table created');
});
module.exports = category_master;
