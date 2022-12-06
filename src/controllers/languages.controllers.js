const Languages = require("../models/laguages");
const mysqlConnection = require("../database/database");
languagesCtrl = {};
languagesCtrl.getLanguages = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT languageId, name FROM ETM_Languages",
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
module.exports = languagesCtrl;
