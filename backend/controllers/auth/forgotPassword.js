const {User} = require('../../models/User');
const randomstring = require('randomstring')
const passwordEmail = require('../../utils/passwordEmail')
const ForgotPassword = async (req, res, next) => {
    let {inputEmail} = req.body;
    let user = await User.findOne({ email: inputEmail });
  
    if (!user) return res.status(400).json({msg: 'Email Not Found'});
  
    let token = randomstring.generate();
    user.secretToken = token
    await user.save();
  
    await passwordEmail(req, token, inputEmail, user.firstname);
    res.status(200).json({
        success: true,
        msg: 'Token sent successful',
        })
  }
  
  module.exports = ForgotPassword;