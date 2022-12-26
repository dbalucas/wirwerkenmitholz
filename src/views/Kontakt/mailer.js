import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'your-smtp-provider.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-username',
    pass: 'your-password'
  }
});


transport.sendMail({
    from: '"Your Name" <your@email.com>',
    to: 'recipient@email.com',
    text: 'Hello, world!'
  });
  