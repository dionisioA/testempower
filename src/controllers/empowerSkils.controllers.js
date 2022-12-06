const mysqlConnection = require('../database/database');
empowerSkillCtrl={};
empowerSkillCtrl.addSkill=async(req, res)=>{
  try {
    console.log(req.body);
    mysqlConnection.query('INSERT INTO ETM_EmpowerSkills set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
empowerSkillCtrl.getSkills = async(req, res)=>{
  try {
    mysqlConnection.query('SELECT skillId, name, code, intelligenceId FROM ETM_EmpowerSkills ', (err, rows, fields)=>{
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
empowerSkillCtrl.getSkillLevels = async(req, res)=>{
  try {
    mysqlConnection.query('SELECT levelId, description FROM ETM_SkillLevel ', (err, rows, fields)=>{
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

empowerSkillCtrl.getSkill = async (req,res)=>{
  try {
    const { id } = req.params;
    await mysqlConnection.query('SELECT skillId, name, code, intelligenceId FROM ETM_EmpowerSkills WHERE skillId = ?', [id], (err, rows, fileds)=>{
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
empowerSkillCtrl.getSkillLevel = async (req,res)=>{
  try {
    const { id } = req.params;
    await mysqlConnection.query('SELECT levelId, description FROM ETM_SkillLevel WHERE levelId = ?', [id], (err, rows, fileds)=>{
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
module.exports=empowerSkillCtrl;