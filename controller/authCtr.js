const bcrypt = require("bcrypt");
const User = require("../model/auth");
const authCtr = {
  register: async (req, res) => {
    const { username, password } = req.body;

    const exist = await User.findOne({ username: username });
    if (exist) {
      res.status(504).send("user exist!!");
      return;
    }

    const user = new User({
      username: username,
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send("회원가입 성공");
    res.redirect("/");
  },
};

module.exports = authCtr;
