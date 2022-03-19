import reportModel from "../../model/Report";
function viewComplaintsController(req, res) {
  let filter = req.user.isAdmin ? {} : { username_id: req.user._id };
  reportModel.find(filter).then((report) => {
    //No user found
    if (!report) {
      return res.status(401).send({
        success: false,
        message: "Could not find ",
      });
    } else {
      return res.status(200).send({
        success: true,
        message: "Logged in successfully!",
        reports: report,
      });
    }
  });
}
function viewOneComplaintsController(req, res) {
  console.log(req.params.id, "report id");
  reportModel.findOne({ _id: req.params.id }).then((report) => {
   
    //No user found
    if (!report) {
      return res.status(401).send({
        success: false,
        message: "Could not find ",
      });
    } else {
      // console.log(report);
      return res.status(200).send({
        success: true,
        message: "Logged in successfully!",
        reports: report,
      });
    }
  });
}
export { viewOneComplaintsController };
export default viewComplaintsController;
