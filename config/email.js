let nodemailer = require('nodemailer');
require('dotenv').config();

module.exports.GmailTransport = nodemailer.createTransport({
    service: process.env.SERVICE_NAME,
    host: process.env.SERVICE_HOST,
    secure:process.env.SERVICE_SECURE,
    port: process.env.SERVICE_PORT,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD
    }
});

module.exports.ViewOption = (transport, hbs) => {
    transport.use('compile', hbs({
            viewPath: 'views/email',
            extName: '.hbs'
    }));
}
