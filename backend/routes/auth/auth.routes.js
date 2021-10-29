const express = require('express');
const router = express.Router();
const registerUser = require('../../controllers/auth/register');
const loginUser = require('../../controllers/auth/login');
const confirmEmail = require('../../controllers/auth/confirmEmail');
const forgotPassword = require('../../controllers/auth/forgotPassword')
const resetPassword = require('../../controllers/auth/resetPassword')




router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/confirm-user', confirmEmail);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password/:token', resetPassword);

module.exports = router;