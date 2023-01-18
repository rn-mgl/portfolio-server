const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Internal error. Please wait for a moment.",
  };

  if (err.name === "CastError") {
    (customError.statusCode = 404),
      (customError.msg = `No message found with the id ${err.value._id || err.value}`);
  }

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
