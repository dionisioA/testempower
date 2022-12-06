const mysqlConnection = require("../database/database");
const jwt = require("jsonwebtoken");
userCtrl = {};
userCtrl.login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    if (!(userEmail && password)) {
      return res
        .status(400)
        .json({ message: " Username & Password are required!" });
    }
    mysqlConnection.query(
      "select userId, userEmail, password from ETM_Users where userEmail=? and password=?",
      [userEmail, password],
      (err, rows, fields) => {
        if (!err) {
          if (rows.length > 0) {
            let data = JSON.stringify(rows[0]);
            const token = jwt.sign(data, "stil");
            res.json({ token });
          } else {
            res.json("Usuario denegado");
          }
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
userCtrl.testToken = async (req, res) => {
  verifyToken();
};
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json("No autorizado");
  } else {
    const token = req.headers.authorization.substr(7);
    if (token !== "") {
      const content = jwt.verify(token, "stil");
      console.log(token);
      req.data = content;
      next();
    }
  }
}
module.exports = userCtrl;
