import reportModel from "../../model/Report";

const registerComplaint = (req, res) => {
  const report = new reportModel({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    title: req.body.title,
    call_to_action: req.body.call_to_action,
    phone_no: req.body.phone,
    username_id: req.user._id,
    city: req.body.city,
    state: req.body.state,
    gender: req.body.gender,
    occupation: req.body.occupation,
    incident_date: req.body.incident_date,
    report_date: new Date(),
    incident_desciption: req.body.incident_desciption,
    incident_place: req.body.incident_place,
    incident_type: req.body.incident_type,
  });

  report
    .save()
    .then((report) => {
      res.send({
        success: true,
        message: "User created successfully.",
        report: {
          id: report._id,
          report_date: report.report_date,
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

};

export default registerComplaint;
