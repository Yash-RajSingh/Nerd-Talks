const { Router } = require("express");
const router = Router();
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ mes: "yeh" });
});
module.exports = router;
