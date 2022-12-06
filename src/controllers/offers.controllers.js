const JobOffer = require("../models/jobOffer");
const mysqlConnection = require("../database/database");
offersCtrl = {};
offersCtrl.createOffer = async (req, res) => {
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_JobOffer set ?",
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
offersCtrl.getOffers = async (req, res) => {
  try {
    await mysqlConnection.query(
      "SELECT offerId, jobId, companyId, startDate, finalDate, statusId, privacyId, modalityId, timeId FROM ETM_JobOffer ",
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
offersCtrl.getOffer = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT offerId, jobId, companyId, startDate, finalDate, statusId, privacyId, modalityId, timeId FROM ETM_JobOffer WHERE offerId = ?",
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

offersCtrl.updateStatus = async (req, res) => {
  try {
    mysqlConnection.query(
      "UPDATE ETM_JobOffer SET statusId = ? WHERE offerId = ? ",
      [req.body.statusId, req.body.offerId],
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

offersCtrl.getResumOffer = async (req, res) => {
  try {
    await mysqlConnection.query(
      "SELECT talent_marketplace.ETM_Jobs.name  as 'Puesto' ,talent_marketplace.ETM_Companies.name as 'Empresa',talent_marketplace.ETM_Companies.companyScore  as 'Calificacion' FROM talent_marketplace.ETM_JobOffer INNER JOIN talent_marketplace.ETM_Jobs ON talent_marketplace.ETM_JobOffer.jobId = talent_marketplace.ETM_Jobs.jobId INNER JOIN talent_marketplace.ETM_Companies ON talent_marketplace.ETM_JobOffer.companyId = talent_marketplace.ETM_Companies.companyId  ",
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
offersCtrl.getResumOfferbyCompany = async (req, res) => {
  try {
    const { id } = req.params;
    await mysqlConnection.query(
      "SELECT talent_marketplace.ETM_Jobs.name  as 'Puesto' ,talent_marketplace.ETM_Companies.name as 'Empresa',talent_marketplace.ETM_Companies.companyScore  as 'Calificacion' FROM talent_marketplace.ETM_JobOffer INNER JOIN talent_marketplace.ETM_Jobs ON talent_marketplace.ETM_JobOffer.jobId = talent_marketplace.ETM_Jobs.jobId INNER JOIN talent_marketplace.ETM_Companies ON talent_marketplace.ETM_JobOffer.companyId = talent_marketplace.ETM_Companies.companyId  where talent_marketplace.ETM_Companies.companyId = ?;",
      [id],
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


//Agregar educación por oferta
offersCtrl.addEducationPerOffer = async (req, res) => {
  try {
    mysqlConnection.query(
      "INSERT INTO ETM_EducationXoffer set ?",
      [req.body],
      (err, rows) => {
        if (err) {
          return res.send(err);
        } else {
          res.json(req.body);
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

offersCtrl.getEducationPerOffer = async (req, res) => {
  try {
    const { offerId } = req.params;
    mysqlConnection.query(
      "SELECT e.educationId, e.academicDegree, e.typeId FROM ETM_EducationXoffer eo INNER JOIN ETM_Education e ON eo.educationId = e.educationId WHERE eo.offerId = ?",
      [offerId],
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

module.exports = offersCtrl;
