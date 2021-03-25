const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'interest.vivi11@gmail.com', // generated ethereal user
    pass: 'interest2018', // generated ethereal password
  },
});

const sendMail = (email) => {
  const option = {
    from: '"Marvee" <novialita.a@gmail.com>',
    to: email,
    subject: "Welcome to Marvee",
    text: "Thank you for registering on Marvee"
  }

  transporter.sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email has been sent!');
    }
  })
}

module.exports = sendMail