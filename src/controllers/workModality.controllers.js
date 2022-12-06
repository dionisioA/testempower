const mysqlConnection = require('../database/database');
modalityCtrl={};
modalityCtrl.addModality=async(req, res)=>{
    console.log(req.body);
    mysqlConnection.query('INSERT INTO ETM_WorkModality set ?',[req.body], (err, rows)=>{
        if(err){
           return res.send(err);
        }else{
            res.json(rows);
        }
    });
}
modalityCtrl.getModalities = async (req, res)=>{
    await mysqlConnection.query('SELECT modalityId, description FROM ETM_WorkModality ', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
    });
}
modalityCtrl.getModality = async (req,res)=>{
    const { id } = req.params;
    await mysqlConnection.query('SELECT modalityId, description FROM ETM_WorkModality WHERE modalityId = ?', [id], (err, rows, fileds)=>{
        if(!err) {
            res.json(rows);
            } else {
            console.log(err);
            }
    });

}
module.exports=modalityCtrl;