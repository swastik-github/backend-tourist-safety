import ReportModel from "../../model/Report";

const addResponseController = (req, res) => {
  
  let res_data = {
    // report_id:req.params.report_id,
    admin_name:req.body.admin_name,
    message:req.body.message,
    response_date:new Date(),
  }
  console.log(res_data,{report_id:req.params.report_id} ,"req data");
  ReportModel.updateOne(
    { _id: req.params.report_id },
    {
      $push: { admin_response: res_data  }
    },
    function (err, data) {
      ReportModel.findOne({_id: req.params.report_id},(err, data)=>{
        res.send({
          success:true,
          message:"updated successfully",
          updated_data:data
      })
      })
        
      }
  );
  
};

export default addResponseController;
