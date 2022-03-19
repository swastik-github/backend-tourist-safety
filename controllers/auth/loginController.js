import UserModel from "../../model/User";
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");

const loginController = (req, res) => {
  console.log(req.body);

  UserModel.findOne({ email: req.body.email }).then((user) => {
    //No user found
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Could not find the user.",
      });
    }
  
    console.log(user,"userrrreere");

    //Incorrect password
    console.log(compareSync(req.body.password, user.password));
    if (!compareSync(req.body.password, user.password)) {
    
      return res.status(401).send({
        success: false,
        khana: "so jao",
        message: "Incorrect password",
      });
    }else if(req.body.email !== user.email){
      return res.status(401).send({
        success: false,
        khana: "so jao",
        message: "Incorrect password",
      });
    } else {
      const payload = {
        email: user.email,
        id: user._id,
        isAdmin:user.isAdmin
      };

      const token = jwt.sign(payload, "Random string", { expiresIn: "1d" });

      return res.status(200).send({
        success: true,
        message: "Logged in successfully!",
        token: "Bearer " + token,
      });
    }
  });
};
export default loginController;
