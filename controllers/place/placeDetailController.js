import SEC_KEY from "../../config/SEC_KEY.js";
import axios from "axios";
import fetch from "node-fetch";

function imageURL(placePhotoRef) {
  if (placePhotoRef) {
    let results = fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photo_reference=${placePhotoRef}&key=${SEC_KEY.GOOGLE_API_KEY}`
    ).then((response) => {
      return response.url;
    });
    return results;
  }
}

function placeFullDetails(req, res) {
  let placeResultPhotoref;
  let placeconfig = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.id}&key=${SEC_KEY.GOOGLE_API_KEY}`,
    headers: {},
  };
  axios(placeconfig)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.result));
      placeResultPhotoref = response.data.result.photos[0].photo_reference;
      console.log("photo ref got it !!!!!...." + placeResultPhotoref);
      let photoLink = imageURL(placeResultPhotoref);
      photoLink.then((result) => {
        res.send([result, response.data.result]);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { placeFullDetails };
