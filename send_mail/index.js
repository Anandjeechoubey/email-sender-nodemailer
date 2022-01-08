const MailConfig = require("../config/email");
const hbs = require("nodemailer-express-handlebars");
const gmailTransport = MailConfig.GmailTransport;

const sendMail = (req, res, next) => {
  MailConfig.ViewOption(gmailTransport, hbs);
  let HelperOptions = {
    from: '"DhunX Anand" <dhunx.anand@gmail.com>',
    to: "dhunx.anand@gmail.com",
    subject: "Testing mail from nodemailer",
    template: "test",
    context: {
      name: "dhunx_anand",
      email: "dhunx.anand@gmail.com",
      linkedIn: "https://www.linkedin.com/hp/",
      address: "Jawahar Bhawan, IITR",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ullamcorper enim, sit amet vestibulum nisi facilisis sit amet. Ut a tellus nunc. Praesent sit amet eros eu urna congue viverra. Nam congue nisi at metus molestie luctus. Cras elementum dolor ac pretium mattis. Phasellus at ex nunc. Donec laoreet egestas egestas. In aliquet posuere odio sit amet vulputate. Donec tincidunt arcu in consequat semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc porttitor euismod neque in dignissim. Morbi interdum, est at lobortis euismod, massa diam pharetra leo, ut tristique ipsum neque in ipsum. Integer venenatis urna ut nisi pretium, eu ultricies justo imperdiet. Quisque feugiat augue orci, eu sagittis elit sagittis at. Nam gravida sed ante at luctus. Sed vitae venenatis sem, eget gravida nisi. Vestibulum ac imperdiet mauris. Mauris fermentum, ante sit amet finibus posuere, metus nulla tempus risus, eget laoreet tortor massa in elit. Phasellus faucibus, magna quis porta fermentum, odio dolor vulputate leo, eu porttitor augue ex sit amet odio. Nullam ut molestie nulla, volutpat ultricies mauris. Aenean vel est at tortor auctor aliquam. Cras eu massa at enim malesuada interdum. Quisque varius nisi sed tellus vehicula, sit amet tempor libero porta.",
    },
  };
  gmailTransport.sendMail(HelperOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
    console.log("email is send");
    console.log(info);
    res.json(info);
  });
};

module.exports = sendMail;
