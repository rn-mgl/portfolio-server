const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Page not found" });
  this.statusCode = StatusCodes.NOT_FOUND;
};

module.exports = notFoundMiddleware;
