const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const booking_details = db.define('tbl_booking_details', {
  site_id: {
    type: Sequelize.INTEGER
  },
  site_name: {
    type: Sequelize.STRING
  },
  flat_number: {
    type: Sequelize.INTEGER
  },
  party_name: {
    type: Sequelize.STRING
  },
  party_contact_number: {
    type: Sequelize.STRING
  },
  employee: {
    type: Sequelize.ENUM("Agent","Office")
  },
  employee_id: {
    type: Sequelize.STRING
  },
  employee_name: {
    type: Sequelize.STRING
  },
  token_recieved: {
    type: Sequelize.ENUM("Pending","Recieved","Cancelled")
  },
  final_status: {
    type: Sequelize.ENUM("Available","Booked","Hold","InProcess")
  },
  amount_recieved: {
    type: Sequelize.DECIMAL
  },
  sale_deed: {
    type: Sequelize.ENUM("Yes","No")
  },
  site_visit_date: {
    type: Sequelize.DATEONLY
  },
  remarks: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM("Pending","Approved","Completed","Cancelled")
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


booking_details.sync().then(() => {
  console.log('table created');
});
module.exports = booking_details;
