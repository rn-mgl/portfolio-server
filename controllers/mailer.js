const nodeMailer = require("nodemailer");

const sendMail = async (senderName, senderEmail, msgSubject, msgBody) => {
  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: process.env.MAILER_USER,
    subject: msgSubject,
    html: `<b>${senderName} | ${senderEmail}</b> sent you a message.
            <br />
            <br />
            --start
                <br />
                    ${msgBody}
                <br />
            --end`,
  };

  const result = await transport.sendMail(mailOptions);

  return result;
};

module.exports = sendMail;
