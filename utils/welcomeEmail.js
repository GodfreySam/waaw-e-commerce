const sendEmail = require("../config/mailer");

const welcomeEmail = async (req, firstname, email, secretToken) => {
   const html = `
      <h2>welcome to Frooto</h2>
      <strong>${firstname}, happy shopping.</strong>
      <br/>
      <br/>
      You can copy and paste the following code:
      <br/>
      <br/>
       <strong>${secretToken}</strong>
       <br/>
       <br/>
       in the verification form or
       click on the link below to activate your account.
       <br/>
       <br/>
       Verification Link: http://${req.headers.host}/user/verify/:${secretToken}
      <br/>
      <br/>
         Happy shopping !!!!!
      <br/>
      <br/>
      Cheers,
      <br/>
      <srong>Frooto Team</strong>
      <br/>
      contact: support@frootomail.com
   `;

   await sendEmail(
      'support@frootochat.com',
      email,
      'Welcome to Frooto',
      html
   );
}

module.exports = welcomeEmail;