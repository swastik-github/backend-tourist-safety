import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import placeDetails from './routes/placeDetails.js'
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/placedetails', placeDetails)



let server = app.listen(process.env.PORT || 1000, function () {
  console.log("Listening on port " + server.address().port);
});
