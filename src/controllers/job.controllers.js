const mysqlConnection = require("../database/database");
jobCtrl = {};
jobCtrl.addJob = async (req, res) => {
  try {
    console.log(req.body);
    mysqlConnection.query(
      "INSERT INTO ETM_Jobs set ?",
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
jobCtrl.getJobs = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT jobId, name, jobObjective, activityId FROM ETM_Jobs ",
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
jobCtrl.getJob = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT jobId, name, jobObjective, activityId FROM ETM_Jobs WHERE jobId = ?",
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
jobCtrl.getJobId = async (req, res) => {
  try {
    const { name } = req.params;
    await mysqlConnection.query(
      "SELECT jobId  FROM ETM_Jobs WHERE name = ?",
      [name],
      (err, rows, fileds) => {
        if (!err) {
          res.json(rows[0].jobId);
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = jobCtrl;
