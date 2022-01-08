const express = require('express');
const router = express.Router();
const sendMail = require("../send_mail")


router.get('/email/template', sendMail);

module.exports = router;
