const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { firstName, lastName, email, message } = req.body;
  const { FROM_EMAIL, TO_EMAIL } = process.env;

  const msg = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: "SoundMint - Contact Form Submission",
    html: `
      <p><b>First Name</b>: ${firstName}</p>
      <p><b>Last Name</b>: ${lastName}</p>
      <p><b>Email</b>: ${email}</p>
      <p><b>message</b>: ${message}</p>
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ isSuccess: true, message: "" });
    })
    .catch((error) => {
      res.status(200).json({ isSuccess: false, message: error.message });
    });
}
