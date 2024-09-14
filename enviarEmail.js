const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "sitemartinprojetos@gmail.com",
    pass: "lplh qyoe psyu ukjw",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function enviarEmail(projetos) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"henriquemmartin@gmail.com', // sender address
    to: "henriquemmartin@gmail.com, ifsul.thais@gmail.com , thainara.almeida.eng@gmail.com ", // list of receivers
    subject: "Cliente Clicou em Comprar Projeto ✔", // Subject line
    text:
      "Prezados Henrique e Thainara, o um cliente acaba de clicar no botão comprar projeto (falar por whatsapp) o projeto em questão é: " +
      projetos, // plain text body
    html:
      "Prezados Henrique e Thainara, o um cliente acaba de clicar no botão comprar projeto (falar por whatsapp) o projeto em questão é: " +
      projetos +
      " Att www.martinprojetos.com", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

// Chama a função para enviar o e-mail

module.exports = enviarEmail;
