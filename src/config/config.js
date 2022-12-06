const {config} = require('dotenv');
config();
module.exports={
    port: process.env.PORT || 3000,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASS,
    database: process.env.DB,
};