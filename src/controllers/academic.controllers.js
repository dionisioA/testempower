const mysqlConnection = require("../database/database");
academicCtrl = {};
academicCtrl.addDegreeTitle = async (req, res) => {
  console.log(req.body);
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_DegreeTitle set ?",
      [req.body],
      (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
academicCtrl.getDegreeTitles = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT typeId, description FROM ETM_DegreeTitle",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
academicCtrl.getDegreeTitle = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT typeId, description FROM ETM_DegreeTitle WHERE typeId = ?",
      [id],
      (err, rows, fileds) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------------SERVICIOS DE EDUCACIÓN ------------------//

academicCtrl.addEducation = async (req, res) => {
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_Education set ?",
      [req.body],
      (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.json({"educationId":rows.insertId});
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

academicCtrl.getEducation = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT educationId, academicDegree, typeId FROM ETM_Education",
      [req.body],
      (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = academicCtrl;
