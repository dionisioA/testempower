const router = require('express').Router();
const companiesCtrl= require('../controllers/companies.controllers');
router.post('/empresas', companiesCtrl.addCompany);
router.get('/empresas', companiesCtrl.getCompanies);
router.post('/empresas/sucursales', companiesCtrl.addCompanyBranches);
router.post('/empresas/info', companiesCtrl.addCompanyInfo);
router.get('/empresas/sucursales/:id', companiesCtrl.getCompanyBranches);
module.exports=router;