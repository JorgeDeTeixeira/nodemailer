const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "7a7b75001@smtp-brevo.com",
    pass: "3CFNRz4QBVPX6JkW",
  },
});

let mailOptions = {
  from: `"Jorge Teixeira" <jorgedeteixeirademelo@gmail.com>`,
  to: "jorgeteixeiramelo@gmail.com",
  subject: "Um teste do nodemailer",
  text: "Olá, consegui enviar esse email com Js, Node e nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email enviado com sucesso:" + info.response);
});
