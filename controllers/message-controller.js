const Messages = require("../models/Messages");
const mailer = require("./mailer");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const sendMessage = async (req, res) => {
  const { senderName, senderEmail, msgSubject, msgBody } = req.body;

  const data = await Messages.create({ senderName, senderEmail, msgSubject, msgBody });

  if (!data) {
    throw new BadRequestError(`Error in sending message. Try again later.`);
  }

  const sendMail = await mailer(senderName, senderEmail, msgSubject, msgBody);

  if (!sendMail) {
    throw new BadRequestError(`Error in sending message. Try again later.`);
  }

  res.status(StatusCodes.OK).json(data);
};

module.exports = { sendMessage };
