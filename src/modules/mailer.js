const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const mailConfig = require("../config/mail.json")
var transport = nodemailer.createTransport({
    host:mailConfig.host ,
    port:mailConfig.port,
    auth: {
      user:mailConfig.user,
      pass: mailConfig.pass
    }
  });

  transport.use('conpile',hbs({
      viewEngine:'handlebars',
      viewPath:path.resolve('./src/resources/mail/'),
      extName:'.html'
  }))

  module.exports = transport