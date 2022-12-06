const mysqlConnection = require("../database/database");
incentivesCtrl = {};
incentivesCtrl.addIncentive = async (req, res) => {
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_Incentives set ?",
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

incentivesCtrl.addIncentiveXCompany = async (req, res) => {
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_IncentivesXCompany set ?",
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

incentivesCtrl.getIncentivesXCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    await mysqlConnection.query(
      "SELECT * FROM ETM_IncentivesXCompany WHERE companyId = ?",
      [companyId],
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

incentivesCtrl.getIncentivesXOffer = async (req, res) => {};
