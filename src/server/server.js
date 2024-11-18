const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password', // Consider using environment variables
  },
});

const twilioClient = twilio('your-account-sid', 'your-auth-token');

app.post('/send-details', async (req, res) => {
  const { name, countryCode, phoneNumber, service, city, zipCode, budget, freeText } = req.body;

  // Send Email
  try {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'abc@gmail.com',
      subject: 'Help Widget Form Submission',
      text: `
        Name: ${name}
        Country Code: ${countryCode}
        Phone Number: ${phoneNumber}
        Service: ${service}
        City: ${city}
        Zip Code: ${zipCode}
        Budget: ${budget}
        Message: ${freeText}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send SMS using Twilio
    const message = await twilioClient.messages.create({
      body: `
        Name: ${name}
        Phone Number: ${countryCode}${phoneNumber}
        Service: ${service}
      `,
      from: '+your-twilio-number', // Your Twilio number
      to: '+11122558866',
    });

    res.status(200).send({ message: 'Details sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Error sending details' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
