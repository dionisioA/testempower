const LanguageLevel = require("../models/languageLevel");
const mysqlConnection = require("../database/database");
languageLevelCtrl = {};
languageLevelCtrl.getLanguageLevels = async (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT levelId, description FROM ETM_LanguageLevel",
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
module.exports = languageLevelCtrl;
