
const mysqlConnection = require('../database/database');
companiesCtrl={};
companiesCtrl.addCompany=async(req, res)=>{
  try {
    mysqlConnection.query('INSERT INTO ETM_Companies set ? ',[req.body], (err, rows)=>{
      if(err){
         return res.send(err);
      }else{
          res.json({"companyId": rows.insertId});
      }
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  
 
}


companiesCtrl.getCompanies=async(req,res)=>{
   
    try {
      mysqlConnection.query('SELECT companyId, name, statusID FROM ETM_Companies', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
    });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

companiesCtrl.addCompanyBranches=async(req, res)=>{
  try {
    mysqlConnection.query('INSERT INTO ETM_CompanyBranches set ? ',[req.body], (err, rows)=>{
      if(err){
         return res.send(err);
      }else{
          res.json({"branchId": rows.insertId});
      }
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
 
}

companiesCtrl.addCompanyInfo=async(req, res)=>{
  try {
   
  mysqlConnection.query('INSERT INTO ETM_CompanyInfo set ? ',[req.body], (err, rows)=>{
    if(err){
       return res.send(err);
    }else{
        res.json({"infoId": rows.insertId});
    }
});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

companiesCtrl.getCompanyBranches=async(req,res)=>{
  try {
    const {id}=req.params;
    mysqlConnection.query('SELECT ETM_CompanyBranches.branchName, ETM_CompanyBranches.lat, ETM_CompanyBranches.lng, ETM_CompanyBranches.description FROM ETM_CompanyBranches WHERE ETM_CompanyBranches.companyId = ?',[id], (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

 
}
module.exports=companiesCtrl;




