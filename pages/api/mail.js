const nodemailer = require("nodemailer");
export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  transporter.sendMail(
    {
      from: req.body.email,
      to: [process.env.email, req.body.email],
      subject: req.body.Subject,

      html: `<div
      style="padding: 20px; font-size: 16px; font-family: serif; max-width: 100%"
    >
      <img
        style="max-width: 100%"
        src="https://birdlenstest.vercel.app/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fdevcms%2Ff4b7ac13-51e1-474c-9c5d-4522a931c00b_logo.avif%3Fauto%3Dcompress%2Cformat&w=384&q=75"
      />
      <h2>${req.body.Message}</h2>
      <p>From : ${req.body.email}</p>
      <p>Mobile : <a href="tel:${req.body.Phone}">${req.body.Phone}</a></p>
      <br />
      <p>
        ${req.body.name} Want to book for ${req.body.Subject} on ${req.body.date}
      </p>
      <p>
        Visit
        <a href="https://www.birdlenscreation.com/">www.birdlenscreation.com</a> for
        photography
      </p>
      <h2 style="text-align: center">OR</h2>
      <p>Call us on <a href="tel:+918910575255">+91 8910575255</a></p>
    </div>
    
      `,
    },
    (err, data) => {
      if (err) {
        res.json({
          err,
        });
      } else {
        res.json({
          data,
        });
      }
    }
  );
}
