const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'martin.cahya@gmail.com', // generated ethereal user
    pass: 'martijnoes', // generated ethereal password
  },
});

const sendMail = (email) => {
  const option = {
    from: 'martin.cahya@gmail.com',
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