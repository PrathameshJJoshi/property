const Sequelize = require('sequelize');
// const base = require('react-native-base64')
const db = require('../config/database');

const material_details = db.define('tbl_material_details', {
  site_id: {
    type: Sequelize.INTEGER
  },
  site_name: {
    type: Sequelize.STRING
  },
  material_type: {
    type: Sequelize.ENUM("Issued","Purchased","Received")
  },
  material: {
    type: Sequelize.ENUM("Cement","Steel","Murum","Gitti","Crushed Sand","Kanhan Sand","Wall putty","Plumbing Material",
    "Electrical Material","Bricks","Paving Blocks","Cement Frame","Centring Nails","Centring Wire","Color","Sanitary Material",
    "Granite","Tiles","Kadappa","Water Tank","Plywood and Furniture","Other")
  },
  omaterial: {
    type: Sequelize.STRING
  },
  unit: {
    type: Sequelize.ENUM("Bag","Metric ton","Ft","Nos","Kg","Ltr","Sq. Ft")
  },
  unit_rate: {
    type: Sequelize.DECIMAL
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  amount: {
    type: Sequelize.DECIMAL
  },
  material_from: {
    type: Sequelize.ENUM("Agency","Contractor","Vendor","Apartment")
  },
  location: {
    type: Sequelize.STRING
  },
  contact_person: {
    type: Sequelize.STRING
  },
  contact_number: {
    type: Sequelize.STRING
  },
  remarks: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM("Pending","Approved","Completed","Cancelled")
  },
  employee_id: {
    type: Sequelize.STRING
  },
  employee_name: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
  },
  file: {
    type: Sequelize.TEXT
  }
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


material_details.sync().then(() => {
  console.log('table created');
});
module.exports = material_details;
