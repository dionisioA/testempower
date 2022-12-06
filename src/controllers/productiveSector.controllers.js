const Languages = require("../models/laguages");
const mysqlConnection = require("../database/database");
sectorCtrl = {};
sectorCtrl.getProductiveSector = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT sectorId, name FROM ETM_ProductiveSector",
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
module.exports = sectorCtrl;
