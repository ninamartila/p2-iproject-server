const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

function generateMail(content, text, subject, to) {
  return {
    from: process.env.NODEMAILER_EMAIL, // sender address
    to, // list of receivers
    subject: subject,
    text: text,
    html: content,
  };
}

module.exports = { transporter, generateMail };
