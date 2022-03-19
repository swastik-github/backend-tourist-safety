import { hashSync } from "bcrypt";
import UserModel from "../../model/User";
const registerController = (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashSync(req.body.password, 10),
    isAdmin: req.body.email == "admin" ? true : false,
  });

  user
    .save()
    .then((user) => {
      res.send({
        success: true,
        message: "User created successfully.",
        user: {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        message: "Something went wrong",
        error: err,
      });
    });
  // UserModel.find((err, data)=>{
  //   console.log(data);
  // })
};

export default registerController;
