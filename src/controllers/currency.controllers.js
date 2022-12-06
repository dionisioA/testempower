const mysqlConnection = require("../database/database");
currencyCtrl = {};
currencyCtrl.addCurrency = async (req, res) => {
  try {
    console.log(req.body);
    mysqlConnection.query(
      "INSERT INTO ETM_Currency set ?",
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
currencyCtrl.getCurrencies = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT currencyId, code, name FROM ETM_Currency ",
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
currencyCtrl.getCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT currencyId, code, name FROM ETM_Currency WHERE currencyId = ?",
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

currencyCtrl.getPaymentTypes = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT paymentId, description FROM ETM_PaymentType",
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

module.exports = currencyCtrl;
