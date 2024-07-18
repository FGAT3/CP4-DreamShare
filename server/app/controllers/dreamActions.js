const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const dreams = await tables.dream.readAll();
    res.json(dreams);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
