import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import placeRoutes from './routes/placeDetails.js'
import complaintRoutes from "./routes/complaint.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";
import passport from 'passport'
require('./config/passport')
const app = express();
app.use(passport.initialize());


mongoose.connect('mongodb://localhost:27017/tourist-safety');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth',authRoutes)
app.use('/placedetails', placeRoutes)
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.user,"user");
  
  return res.status(200).send({
      success: true,
      user: {
          id: req.user._id,
          email: req.user.email,
          user:req.user
      }
  })
})
app.use('/complaint',passport.authenticate('jwt', { session: false }), complaintRoutes)
app.use('/admindashboard',passport.authenticate('jwt', { session: false }),adminRoutes )



let server = app.listen(process.env.PORT || 1000, function () {
  console.log("Listening on port " + server.address().port);
});
