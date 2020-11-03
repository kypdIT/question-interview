const express = require("express");
const { signup, signin, signout } = require("../controller/Users");
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post("/signup", signup); //,validateSignupRequest, isRequestValidated
router.post("/signin", signin); //,validateSigninRequest, isRequestValidated
router.post("/signout", signout);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;
