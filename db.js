var Bookshelf = require('bookshelf');

var config = {
   
   host : 'devhosting.wiredelta.in',
user : 'institute.devhos',
password : 'InstituteWD2014',
database : 'wd_institute_dev',
   charset: 'UTF8_GENERAL_CI'
};

var DB = Bookshelf.initialize({
   client: 'mysql', 
   connection: config
});

module.exports.DB = DB;