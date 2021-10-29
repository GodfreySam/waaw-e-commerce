const { User } = require('../../models/User');
const bcryptjs = require('bcryptjs');
const welcomeEmail = require('../../utils/welcomeEmail');
const randomstring = require('randomstring');

const createNewUser = async (req, res, next) => {
  try {
    let { firstname, lastname, email, password } = req.body;
    if(!firstname || !lastname || !email || !password ) return res.status(400).json({success: false, msg: 'All fields are required'});

    let newFirstname = firstname.toLowerCase().replace(/ /g, '');
    let newLastname = lastname.toLowerCase().replace(/ /g, '');

    const user_email = await User.findOne({email});
    if(user_email) return res.status(400).json({success: false, msg: 'Email already exists'});

    let hashedPassword = bcryptjs.hashSync(password, 12);

    let secretToken = randomstring.generate();

    const newUser = new User({
      firstname: newFirstname,
      lastname: newLastname,
      email,
      password: hashedPassword,
      secretToken
    });

    await newUser.save();
    if(!newUser) return res.status(500).json({msg: 'An error has occurred'});

    await welcomeEmail(req, newUser.firstname, newUser.email, newUser.secretToken);

    res.status(201).json({
      success: true,
      msg: 'User saved successfully',
      user: newUser
    })

  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
}

module.exports = createNewUser;
