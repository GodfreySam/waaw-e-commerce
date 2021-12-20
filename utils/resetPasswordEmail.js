const sendEmail = require("../config/mailer");

const resetPasswordEmail = async (req, firstname, email, secretToken) => {
	const html = `
     <h2>welcome to Frooto</h2>
      <strong>${firstname}, happy shopping.</strong>
      <br/>
      <br/>
      Here is your password reset token:
      <br/>
      <br/>
       <strong>${secretToken}</strong>
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

	await sendEmail("support@frooto.com", email, "Welcome to Frooto", html);
};

module.exports = resetPasswordEmail;
