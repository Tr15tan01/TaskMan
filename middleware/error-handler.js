const errorHandlingMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: "Something wend wrong..." });
};

module.exports = errorHandlingMiddleware;
