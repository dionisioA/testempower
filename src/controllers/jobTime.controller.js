const mysqlConnection = require("../database/database");
jobTimeCtrl = {};
jobTimeCtrl.addJobTime = async (req, res) => {
  try {
    console.log(req.body);
    mysqlConnection.query(
      "INSERT INTO ETM_JobTime set ?",
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
jobTimeCtrl.getJobTimes = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT timeId, description FROM ETM_JobTime ",
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
jobTimeCtrl.getJobTime = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT timeId, description FROM ETM_JobTime WHERE timeId = ?",
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
module.exports = jobTimeCtrl;
