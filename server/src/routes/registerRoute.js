const User = require("../models/User");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const userDoc = await User.create({ email, username, password });
    const ResponseData = {
      message: "User created successfully!",
      userData: userDoc,
    };
    res.status(200).json(ResponseData);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        error: error,
        errorCode: error.code,
        message: "User already Exists",
      });
    } else {
      res.status(400).json(error);
    }
  }
});

module.exports = router;
