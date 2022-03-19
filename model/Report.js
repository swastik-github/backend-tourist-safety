import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const reportSchema = mongoose.Schema({
  name: String,
  username_id: ObjectId,
  email: String,
  city: String,
  state: String,
  title: String,
  call_to_action: String,
  gender: String,
  occupation: String,
  incident_date: Date,
  report_date: Date,
  incident_desciption: String,
  incident_place: String,
  incident_type: String,
  phone_no: Number,
  age: Number,
  admin_response: [
    {
      admin_name: String,
      response_date: Date,
      message: String,
    },
  ],
});

const ReportModel = mongoose.model("Report", reportSchema);

export default ReportModel;
