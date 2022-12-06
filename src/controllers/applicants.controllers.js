const mysqlConnection = require("../database/database");

offersCtrl = {};
offersCtrl.getActiveApplicants = async (req, res) => {
  try {
    await mysqlConnection.query(
      "SELECT j.name, jo.finalDate, cb.lat as latitud, cb.lng as longitud,cb.branchName as branch, count(ao.offerId) as applicants, ao.offerId FROM ETM_JobOffer jo INNER JOIN ETM_Jobs j ON jo.jobId = j.jobId INNER JOIN ETM_Offers_Location ol  ON jo.offerId = ol.offerId INNER JOIN ETM_CompanyBranches cb ON ol.branchId = cb.branchId LEFT JOIN ETM_ApplicationsXOffer ao ON jo.offerId = ao.offerId WHERE jo.finalDate >= CURDATE() and jo.statusId = 1 GROUP BY ao.offerId;",
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

module.exports = offersCtrl;
