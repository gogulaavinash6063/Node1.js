var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gogulaavinash2421@gmail.com',
    pass: 'cmdn enuj bjyk xonq'
  }
});

var Options = {
  from: 'gogulaavinash2421@gmail.com',
  to: 'yshashi661@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'im avinash'
};

transporter.sendMail(Options, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 