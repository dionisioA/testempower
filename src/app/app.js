const express = require('express');
const config= require('../config/config');
const cors =require( 'cors');
const db = require('../database/database');

/** Application Routes */
const academic = require('../routes/academic.routes');
const companies= require('../routes/companies.routes');
const currencies = require('../routes/currency.routes');
const empowerSkils = require('../routes/empowerSkills.routes');
const jobs =require('../routes/jobs.routes');
const jobTime = require('../routes/jobTime.routes');
const languages = require('../routes/languages.routes');
const languageLevel=require('../routes/languageLevel.routes');
const sector=require('../routes/productiveSector.routes');
const workModalities = require('../routes/workModalities.routes');
const offers = require('../routes/offers.routes');
const applicants = require('../routes/applicants.routes');
const users = require('../routes/users.routes');
const app=express();

app.use(cors());
app.use(express.json());
app.set('port',config.port);
app.use(academic);
app.use(companies);
app.use(currencies);
app.use(empowerSkils);
app.use(jobs);
app.use(jobTime);
app.use(languages);
app.use(sector);
app.use(workModalities);
app.use(offers);
app.use(languageLevel);
app.use(applicants);
app.use(users);

app.get('/', (req, res)=>{
    res.send('<h1>Empower API</h1>');

});
module.exports=app;